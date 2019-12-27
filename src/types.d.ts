interface DisplayGroupMenu {
  groupName: string;
  items: string[];
}

interface Store {
  id: string;
  logoUrl: string;
  name: string;
  address: string;
  district: string;
  city: string;
  phone: string;
  redInvoice: RedInvoice;
}

interface RedInvoice {
  name: string;
  address: string;
  district: string;
  city: string;
  taxCode: string;
}

interface AddressInfo {
  address: string;
  district: string;
  city: string;
}

interface City {
  ID: number;
  Title: string;
  TotalDoanhNghiep: number;
}

interface District {
  ID: number;
  Title: string;
}

interface NameValuePair {
  name: string;
  value: any;
}
