import Icon from "@mui/material/Icon";

const sizes = {
    sm: 14,
    md: 24,
    lg: 32,
};

interface IconProps {
  name: string;
  size?: "sm" | "md" | "lg";
}

export default function DSIcon({
    name,
    size = "md",
}: IconProps) {

    return (

        <Icon
            className="material-icons-round"
            sx={{ 
                fontSize: sizes[size],
                color: "inherit",
            }}
        >
            {name}
        </Icon>

    );

}