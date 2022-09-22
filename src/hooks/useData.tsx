import { useCallback, useEffect, useState } from "react";

export const useData = <T,>(url: string) => {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  const fetchData = useCallback(async (url: string): Promise<T> => {
    return await fetch(url).then((res) => res.json());
  }, []);

  useEffect(() => {
    const func = async (): Promise<void> => {
      try {
        const res = await fetchData(url);
        setData(res);
      } catch (error) {
        console.error("Error:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    func();
  }, [fetchData, url]);

  return [data, isLoading, isError] as const;
};
