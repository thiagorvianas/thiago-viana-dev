import { useEffect, useState } from 'react';
import * as C from './styles';
import { MiddleSidebar } from '../../components/MiddleSidebar';
import { ItemDispenser } from '../../components/MiddleSidebar/ItemDispenser';
import { FilterItem } from '../../components/FilterItem';
import { CardProject } from '../../components/ProjectCard';
import { projectsData } from '../../data/Projects.data';
import { stacksData } from '../../data/Projects.data';
import useWindowDimensions from '../../utils/UseWindowDimentions';
import { ProjectData } from '../../types/ProjectData';

export const Projects = () => {
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState([]);
  const [projects, setProjects] = useState<ProjectData[]>([]);

  useEffect(() => {
    const test = filters.map((filter) => {
      const filtered = projectsData.filter((item: ProjectData) => {
        return item.stacks.includes(filter);
      })
      
      return filtered;
    })[0];

    if (filters.length !== 0) {
      setProjects(test);
    } else {
      setProjects(projectsData);
    }
  }, [filters]);
  
  return(
    <C.Container>
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
        { projects.map((project, i) => (
          <C.Project key={ project.id }>
            <C.ProjectTitle>
              <p>
                <span>Project { i + 1 }</span> {'//'} _{ project.title }
              </p>
            </C.ProjectTitle>

            <CardProject data={ project } />
          </C.Project>
        )) }
      </C.DataContent>
    </C.Container>
  );    
};
