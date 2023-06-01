export interface ActivityCardProps {
  photo: string;
  name: string;
  type?: string;
  author?: string;
  year?: string;
  platform?: string;
  downloads?: string;
  email?: string;
  phone?: string;
  social?: string;
  isFullCard?: boolean;
  onClick?: () => void;
}
