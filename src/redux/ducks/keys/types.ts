export type KlyuchevikiItem = {
  id: number;
  name: string;
  stopword: string;
  word: string;
  company_id: number;
  exclude: string;
};

export type KlyuchevikiRes = { count: number; data: KlyuchevikiItem[] };
