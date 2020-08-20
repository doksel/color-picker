export type CustomButtonTypes = {
    className?: string;
    size?: string;
    type?: string;
    htmlType: "button" | "submit" | "reset" | undefined;
    text?: string;
    onClick?: (e: React.MouseEvent) => void;
    ghost?: boolean;
    loading?: boolean;
    disabled?: boolean;
  };