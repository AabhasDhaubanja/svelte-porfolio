import { writable } from "svelte/store";

type ToastType = "DEFAULT" | "ERROR";

type Toast = {
  id: string;
  message: string;
  type: ToastType;
};

const defaultToasts: Toast[] = [];

export const toasts = writable(defaultToasts);

export const removeToast = (id: string) => {
  toasts.update((prev) => {
    const index = prev.findIndex((toast) => toast.id === id);
    const newToasts = [...prev];
    newToasts.splice(index, 1);
    return newToasts;
  });
};

export const toast = (message: string, type: ToastType = "DEFAULT") => {
  const id = crypto.randomUUID();
  toasts.update((prev) => [{ id, message, type }, ...prev.slice(0, 3)]);

  setTimeout(() => {
    removeToast(id);
  }, 3000);
};
