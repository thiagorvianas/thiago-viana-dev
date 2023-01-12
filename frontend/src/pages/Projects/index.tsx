import { useEffect, useState } from 'react';
import * as C from './styles';
import { MiddleSidebar } from '../../components/MiddleSidebar';
import { ItemDispenser } from '../../components/MiddleSidebar/ItemDispenser';
import { FilterItem } from '../../components/FilterItem';
import { CardProject } from '../../components/ProjectCard';
import { stacksData } from '../../data/Projects.data';
import useWindowDimensions from '../../utils/UseWindowDimentions';
import { ProjectData } from '../../types/ProjectData';
import { useApi } from '../../hooks/useApi';

export const Projects = () => {
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState([]);
  const [load, setLoad] = useState(false);
  const [allProjects, setAllProjects] = useState<ProjectData[]>([]);
  const [projects, setProjects] = useState<ProjectData[]>([]);
console.log(projects);

  const api = useApi();

  const getProjects = async () => {
    try {
      const data = await api.getProjects();

      const adjustedData = data.map((item: ProjectData) => {
        const stacksList = (item.stacks as string).split(';');

        return { ...item, stacks: stacksList };
      });

      setAllProjects(adjustedData);
      setLoad(true);
    } catch (error) {
      console.log(error);
    }
  }

  const filterProjects= (filtersList: string[]) => {
    const filteredProjects = filtersList.map((filter) => {
      const filtered = allProjects.filter(({ stacks }: ProjectData) => {

        return stacks.includes(filter);
      })
      
      return filtered;
    })[0];

    if (filters.length !== 0) {
      setProjects(filteredProjects);
    } else {
      setProjects(allProjects);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  useEffect(() => {
    filterProjects(filters);
  }, [filters, allProjects]);
  
  return(
    <C.Container>
      { useWindowDimensions().width < 1023 &&
        <C.Title>
          <p>_projects</p>
        </C.Title>
      }

      <MiddleSidebar items={
        <ItemDispenser
          dispenserTitle="projects"
          setOpen={ setOpen }
          items={
            <C.Items>
              { stacksData.map((stack) => (
                <FilterItem
                  key={ stack.id }
                  stack={ stack }
                  setFilters={ setFilters }
                  filtersList={ filters }
                />
              )) }
            </C.Items>
          }
        />
      } />

      { useWindowDimensions().width < 1023 && (
        <C.FiltersTitle>
          <p>{'//'} projects <span>/ {
            filters.length !== 0 ? filters.map((filter) => (`${filter}; `)) : 'all'
          }</span></p>
        </C.FiltersTitle>
      ) }
      
      <C.DataContent>
        { load ? projects.map((project, i) => (
          <C.Project key={ project.id }>
            <C.ProjectTitle>
              <p>
                <span>Project { i + 1 }</span> {'//'} _{ project.title }
              </p>
            </C.ProjectTitle>

            <CardProject data={ project } />
          </C.Project>
        )) : <C.Loading><p>loading...</p></C.Loading> }
      </C.DataContent>
    </C.Container>
  );    
};
