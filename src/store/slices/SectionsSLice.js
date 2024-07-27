import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  header: {},
  aboutUs: {},
  ourMissionOurTechnologies: {},
  projects: {}
};

const sectionsSlice = createSlice({
  name: 'sections',
  initialState,
  reducers: {
    setSectionData: (state, action) => {
      if(action.payload.sectionName === 'aboutUs'){
        state[action.payload.sectionName] = { sectionText: action.payload.data.sectionText, sectionMediaUrl: action.payload.data.sectionMediaUrl1 };
      }
      else if(action.payload.sectionName === 'ourMissionOurTechnologies'){
        state[action.payload.sectionName] = {sectionText1: action.payload.data.sectionText1, sectionText2: action.payload.data.sectionText2, sectionMediaUrl: action.payload.data.sectionMediaUrl}
      }
      else if(action.payload.sectionName === 'header'){
        state[action.payload.sectionName] = {sectionText: action.payload.data.sectionText, sectionMediaUrl: action.payload.data.sectionMediaUrl }
      }
      else if(action.payload.sectionName === 'projects'){
        state[action.payload.sectionName] = {sectionName: action.payload.data.sectionName }
      }


      // console.log(state);
    },
    updateSectionData: (state, action) => {
      const { sectionName, data } = action.payload;
      state[sectionName] = {
        ...state[sectionName],
        ...data
      };
    }
  }
});

export const { setSectionData, updateSectionData } = sectionsSlice.actions;
export default sectionsSlice.reducer;
