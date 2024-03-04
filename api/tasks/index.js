"use client";
import axios from "axios";
import { API_URL } from "@/constants";
import { queryClient } from "@/app/layout";
import { useMutation, useQuery } from "react-query";

export const useTasks = () => {
  return useQuery(["tasks"], async () => {
    const { data } = await axios.get(`${API_URL}/tasks`);
    return data;
  });
};

export const useNewTasks = () => {
  return useMutation((body) => axios.post(`${API_URL}/tasks`, body), {
    onSuccess() {
      queryClient.invalidateQueries(["tasks"]);
    },
  });
};

export const useUpdateTask = () => {
  return useMutation((body) => axios.put(`${API_URL}/tasks`, body), {
    onSuccess() {
      queryClient.invalidateQueries(["tasks"]);
    },
  });
};

export const useDeleteTask = () => {
  return useMutation((id) => axios.delete(`${API_URL}/tasks/${id}`), {
    onSuccess() {
      queryClient.invalidateQueries(["tasks"]);
    },
  });
};
