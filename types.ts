
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price: string;
  icon: string;
}

export interface NavLink {
  label: string;
  path: string;
}

export interface InquiryFormData {
  name: string;
  phone: string;
  serviceType: string;
  location: string;
  message: string;
}
