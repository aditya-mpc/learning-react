import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme }) => ({
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
    variants: [
        {
            props: ({ expand }) => !expand,
            style: {
                transform: "rotate(0deg)",
            },
        },
        {
            props: ({ expand }) => !!expand,
            style: {
                transform: "rotate(180deg)",
            },
        },
    ],
}));

/**
 * CustomCard
 *
 * @param {string | ReactNode} header
 *  Small header text shown at the top of the card
 *
 * @param {string | ReactNode} title
 *  Main heading of the card
 *
 * @param {string | ReactNode} subTitle
 *  Secondary text below the title
 *
 * @param {string | ReactNode} content
 *  Main body content of the card
 *
 * @param {ReactNode} actions
 *  Elements to be rendered inside CardActions
 *
 * @param {object} cardSx
 *  Custom sx styles for the Card component
 *
 * @param {object} contentSx
 *  Custom sx styles for the CardContent component
 *
 * @param {boolean} showActions
 *  Controls visibility of CardActions
 */
export default function CustomCard({
    header = "Default Header",
    title = "Default Title",
    subTitle = "Default Subtitle",
    content = "This is default card content, needs to be replaced.",
    actions = null,
    cardSx = {},
    contentSx = {},
    showActions = true,
}) {
    return (
        <Card sx={{ ...cardSx }}>
            <CardContent sx={contentSx}>
                {header && (
                    <Typography
                        gutterBottom
                        sx={{ color: "text.secondary", fontSize: 14 }}
                    >
                        {header}
                    </Typography>
                )}

                {title && (
                    <Typography variant="h5" component="div">
                        {title}
                    </Typography>
                )}

                {subTitle && (
                    <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                        {subTitle}
                    </Typography>
                )}

                {content && <Typography variant="body2">{content}</Typography>}
            </CardContent>

            {showActions && actions && <CardActions>{actions}</CardActions>}
        </Card>
    );
}
