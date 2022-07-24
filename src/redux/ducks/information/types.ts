export type InformationItem = {
  id: number;
  aydi: number;
  aydi_soobshcheniya: number;
  company_id: number;
  create_at: string;
  status: string;
  text: string;
  truba_id: number;
};

export type InformationRes = {
  count: number;
  data: InformationItem[];
  isPending: boolean;
};
