import { IJobPlacementBody } from 'api/job-placement';
import { SET_JOB_PLACEMENT_FORM, SET_JOB_PLACEMENT_STEP } from './contansts';

/**
 *
 * @param {} data
 * @returns
 */
export function setJobPlacementForm(body: IJobPlacementBody, resolve?: any, reject?: any) {
  return {
    type: SET_JOB_PLACEMENT_FORM,
    body,
    resolve: resolve?.(),
    reject: reject?.(),
  };
}

export function setJobPlacementStep(body: number, resolve?: any, reject?: any) {
  return {
    type: SET_JOB_PLACEMENT_STEP,
    body,
    resolve: resolve?.(),
    reject: reject?.(),
  };
}
