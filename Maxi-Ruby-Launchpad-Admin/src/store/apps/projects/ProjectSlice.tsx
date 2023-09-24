import axios from "../../../utils/axios";
import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../../store";

interface StateType {
  projectİd: string;
  project_id: string;
}

const initialState = {
  projectİd: "",
  project_id: "",
};

export const ProjectSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    setProject: (state, action) => {
      state.projectİd = action.payload;
    },
    setProject_id: (state, action) => {
      state.project_id = action.payload;
    },
  },
});

export const { setProject,setProject_id } = ProjectSlice.actions;

export default ProjectSlice.reducer;
