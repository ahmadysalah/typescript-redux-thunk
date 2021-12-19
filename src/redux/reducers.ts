import { Reducer } from 'react';
import { IJob, JobActions, IAction } from './constants';


export const JobReducer: Reducer<IJob[], IAction> = (state: IJob[] = [], action: IAction) => {
    switch (action.type) {
        case JobActions.ADD_JOB:
            return [...state, action.payload];
        case JobActions.EDIT_JOB:
            return state?.map(job => {
                if (job['Job Title'] === action.payload['Job Title']) {
                    return action.payload;
                }
                return job;
            });
        default:
            return state;
    }
}
