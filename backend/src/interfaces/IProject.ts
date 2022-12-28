import IStack from './IStack';

export default interface IProject {
    id: number;
    title: string;
    link: string;
    image?: {
        name: string;
        link: string;
    };
    stacks?: IStack[];
};
