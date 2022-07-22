export type ProposalItem = {
  id: number;
  create_at: string;
  estimation: string;
  group_id: number;
  status: string;
  company_id: number;
  message_id: number;
  qr: string;
  text: string;
  truba_id: number;
  zametki: string;
  found: string;
};

export type ProposalRes = { count: number; data: ProposalItem[] };

export type ProposalREQ = {
  message: string;
  proposal: ProposalItem;
  status: true;
};

export type ProposalQuery = { limit: number; status: string };
