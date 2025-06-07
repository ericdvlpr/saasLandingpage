import { Paragraph } from "../shared/Paragraph";

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}
export const Service = ({ title, description, icon }: ServiceProps) => {
  return (
    <div
      className="p-5 sm:p-6 lg:p-8 rounded-3xl border 
                    border-box-border bg-box-bg shadow-lg relative overflow-hidden"
    >
      <div className="rounded-xl bg-body p-3 text-heading-1 w-max relative">
        {icon}
      </div>
      <div className="text-lg md:text-xl font-semibold text-heading-2">
        <h2>{title}</h2>
        <Paragraph>{description}</Paragraph>
      </div>
    </div>
  );
};
