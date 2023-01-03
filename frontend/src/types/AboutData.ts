export type Experience = {
    id: number;
    title: string;
    company: string;
    modality: string;
    start: string;
    workingNow: boolean;
    end: string;
    attributes: string[];
    skills: string[];
}

export type Bio = {
    id: number;
    text: string[];
}

export type Education = {
    id: number;
    title: string;
    type: string;
    institution: string;
    start: string;
    end: string;
}
