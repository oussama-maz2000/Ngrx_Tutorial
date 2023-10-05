export interface SharedState {
  showLoading: boolean;
  errMsg: string;
}

export const initialSharedState: SharedState = {
  showLoading: false,
  errMsg: '',
};
