import IStack from './IStack';

export default interface IProject {
    id: number;
    title: string;
    description: string;
    link: string;
    stacks: IStack[] | string;
};
