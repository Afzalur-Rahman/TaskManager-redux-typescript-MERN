import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Task {
  _id: string;
  title: string;
  completed: boolean;
  createdAt: string;
}

export const taskApi = createApi({
  reducerPath: "taskApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),

  tagTypes: ["Tasks"],
  endpoints: (builder) => ({
    //get all tasks
    getTasks: builder.query<Task[], void>({
      query: () => "/tasks",
      providesTags: ["Tasks"],
    }),

    //new task
    addTask: builder.mutation<Task, { title: string }>({
      query: (body) => ({
        url: "/tasks",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Tasks"],
    }),

    //delete task

    deleteTask: builder.mutation<void, string>({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
    }),

    //task progress
    toggleTask: builder.mutation<Task, string>({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "PUT",
      }),

      invalidatesTags: ["Tasks"],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useAddTaskMutation,
  useDeleteTaskMutation,
  useToggleTaskMutation,
} = taskApi;
