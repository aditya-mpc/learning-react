import { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import CustomTooltip from "./tooltip";
import CardActionArea from "@mui/material/CardActionArea";

/**
 * CustomCard
 *
 * A fully customizable Material-UI Card component.
 * All sections (header, media, content, actions, expandable content)
 * are optional and configurable via props.
 *
 * -------------------------
 * HEADER PROPS
 * -------------------------
 *
 * @param {React.ReactNode} avatar
 *  Element displayed on the left side of the card header.
 *  Commonly used for Avatar, Icon, or Image.
 *
 * @param {React.ReactNode} headerAction
 *  Element displayed on the right side of the card header.
 *  Usually wrapped inside an IconButton with CustomTooltip.
 *
 * @param {string | React.ReactNode} title
 *  Main title of the card.
 *  Can be plain text or a Typography/custom React node.
 *
 * @param {string | React.ReactNode} subTitle
 *  Secondary text displayed below the title.
 *
 * -------------------------
 * MEDIA PROPS
 * -------------------------
 *
 * @param {string} media
 *  Image URL to be rendered inside CardMedia.
 *  If not provided, media section is skipped.
 *
 * @param {number | string} mediaHeight
 *  Height of the media section.
 *  Accepts number (px) or CSS units.
 *
 * -------------------------
 * CONTENT PROPS
 * -------------------------
 *
 * @param {React.ReactNode} content
 *  Main body content of the card.
 *  Can contain text, JSX, forms, tables, etc.
 *
 * @param {React.ReactNode} expandContent
 *  Content revealed when the card is expanded.
 *  Expand icon is shown only if this prop is provided.
 *
 * -------------------------
 * ACTION PROPS
 * -------------------------
 *
 * @param {Array<{ icon: React.ReactNode, tooltip: string, onClick?: Function }>} actions
 *  List of action icons rendered inside CardActions.
 *  Each icon is automatically wrapped with CustomTooltip.
 *
 * -------------------------
 * STYLE PROPS
 * -------------------------
 *
 * @param {object} cardSx
 *  Style overrides for the Card component.
 *
 * @param {object} contentSx
 *  Style overrides for the CardContent component.
 *
 *  @param {boolean} showActions
 *  Controls visibility of CardActions
 *  @param {Function} onCardClick
 *  If provided, the card becomes clickable using CardActionArea
 *  @param {boolean} disabled
 *  @param {number} elevation
 *  @param {number} hoverElevation
 *
 * -------------------------
 * DEFAULT BEHAVIOR
 * -------------------------
 * - All sections are optional
 * - Expand icon appears only if expandContent exists
 * - Tooltips are handled internally
 */

const ExpandMore = styled(IconButton, {
    shouldForwardProp: (prop) => prop !== "expand",
})(({ theme, expand }) => ({
    marginLeft: "auto",
    transform: expand ? "rotate(180deg)" : "rotate(0deg)",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function CustomCard({
    avatar = null,
    headerAction = null,
    title = "Default Title",
    subTitle = "Default subtitle",
    media = null,
    mediaHeight = 194,
    content = "This is default card content.",
    expandContent = null,
    actions = [],
    cardSx = {},
    contentSx = {},
    showActions = true,
    onCardClick = null,
    disabled = false,
    elevation = 1,
    hoverElevation = 6,
}) {
    const [expanded, setExpanded] = useState(false);
    const isClickable = Boolean(onCardClick) && !disabled;
    const CardWrapper = onCardClick ? CardActionArea : "div";

    return (
        <Card
            sx={{
                maxWidth: 275,
                maxHeight: 345,
                cursor: isClickable && !disabled ? "pointer" : "default",
                opacity: disabled ? 0.6 : 1,
                pointerEvents: disabled ? "none" : "auto",
                transition: "box-shadow 0.3s ease",
                "&:hover": isClickable
                    ? {
                          boxShadow: (theme) => theme.shadows[hoverElevation],
                      }
                    : {},
                ...cardSx,
            }}
            elevation={elevation}
        >
            <CardWrapper onClick={onCardClick}>
                {(title || subTitle || avatar || headerAction) && (
                    <CardHeader
                        avatar={avatar}
                        action={headerAction}
                        title={title}
                        subheader={subTitle}
                    />
                )}

                {media && (
                    <CardMedia
                        component="img"
                        height={mediaHeight}
                        image={media}
                        alt="card-media"
                    />
                )}

                <CardContent sx={contentSx}>
                    {typeof content === "string" ? (
                        <Typography variant="body2" color="text.secondary">
                            {content}
                        </Typography>
                    ) : (
                        content
                    )}
                </CardContent>

                {(actions.length > 0 || expandContent) && (
                    <CardActions showActions={showActions} disableSpacing>
                        {actions.map((action, index) => (
                            <CustomTooltip key={index} title={action.tooltip}>
                                <IconButton
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        action.onClick?.();
                                    }}
                                >
                                    {action.icon}
                                </IconButton>
                            </CustomTooltip>
                        ))}

                        {expandContent && (
                            <CustomTooltip
                                title={expanded ? "Collapse" : "Expand"}
                            >
                                <ExpandMore
                                    expand={expanded}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setExpanded((prev) => !prev);
                                    }}
                                    aria-expanded={expanded}
                                >
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </CustomTooltip>
                        )}
                    </CardActions>
                )}

                {expandContent && (
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>{expandContent}</CardContent>
                    </Collapse>
                )}
            </CardWrapper>
        </Card>
    );
}
