interface Chain {
  index: number;
  id: string;
  title: string;
  icon: string;
  network_id: string;
  disabled?: boolean;
}

interface Wallet {
  id: string;
  title: string;
  icon: string;
  disabled?: boolean;
}
