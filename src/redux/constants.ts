import { Reducer } from "react"

export enum JobActions {
    ADD_JOB = 'ADD_JOB',
    EDIT_JOB = 'EDIT_JOB',
};

export interface IAction {
    type: JobActions;
    payload: IJob;
}
export interface IDispatch {
    (action: IAction): void;
}


export type IReducer = Reducer<IJob[], IAction>;

export interface IState {
    jobs: IReducer
}

export interface IJob {
    'Job Title': string;
    'Job Field': string
    'Job Location': string
    'Compony Industry': string
    'Company Size': string
    'Company Sector': string
    'Currency': string
    'Start Date': Date
    'End Date': string
    'WorkHere': string
    JobDescription: string
    'Company Name': string
    'Company Address': string
    'SuperVisor Name': string
    'SuperVisor by you': string
    'Reson of leaving': string
    'Start salary': number
    'End salary': number
}

