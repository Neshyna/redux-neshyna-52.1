import { createAppSlice } from "../../createAppSlice"
import { FeedbackStateSlice } from "./types"

const feedbackInitialState: FeedbackStateSlice = {
  likes: 0,
  dislikes: 0,
}

export const feedbackSlice = createAppSlice({
  name: "FEEDBACK",
  initialState: feedbackInitialState,
  reducers: create => ({
    setLike: create.reducer((state: FeedbackStateSlice) => {
      state.likes = state.likes + 1
    }),
    setDislike: create.reducer((state: FeedbackStateSlice) => {
      state.dislikes = state.dislikes + 1
    }),
    // resetResults: create.reducer(()=>feedbackInitialState)
  }),
  selectors: {
    likeValue: (state: FeedbackStateSlice) => state.likes,
    dislikeValue: (state: FeedbackStateSlice) => state.dislikes,
  },
})

export const feedbackActions = feedbackSlice.actions;
export const feedbackSelectors = feedbackSlice.selectors;
