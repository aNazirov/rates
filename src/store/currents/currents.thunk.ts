import { getCurrentsService } from '@services/currents.service';
import { currentsAction } from './currents.slice';

export const currentsSet = (currents: any) => async (dispatch: any) => {
  dispatch(currentsAction.setCurrents({ currents }));
};
export const currentSet = (current: number) => async (dispatch: any) => {
  dispatch(currentsAction.setCurrent({ current }));
};
export const sourceSet = (source: string) => async (dispatch: any) => {
  dispatch(currentsAction.setSource({ source }));
};

export const getCurrents = () => async (dispatch: any) => {
  return getCurrentsService()
    .then(currents => dispatch(currentsSet(currents)));
};

export const autoSourceSet = () => async (dispatch: any) => {
  const source = localStorage.getItem('source');
  if (source) dispatch(sourceSet(source));
};