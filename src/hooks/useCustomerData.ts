import { useEffect, useState } from "react";
import { mockCustomer, mockServices, type CustomerSummary, type ServiceItem } from "../data/mock";

export type CustomerData = {
  summary: CustomerSummary;
  services: ServiceItem[];
};

export function useCustomerData() {
  const [data, setData] = useState<CustomerData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData({ summary: mockCustomer, services: mockServices });
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return { data, loading };
}
