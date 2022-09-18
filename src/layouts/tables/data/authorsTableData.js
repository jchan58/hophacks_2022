

/* eslint-disable react/prop-types */
// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiAvatar from "components/VuiAvatar";
import VuiBadge from "components/VuiBadge";

// Images
import avatar1 from "assets/images/avatar1.png";
import avatar2 from "assets/images/avatar2.png";
import avatar3 from "assets/images/avatar3.png";
import avatar4 from "assets/images/avatar4.png";
import avatar5 from "assets/images/avatar5.png";
import avatar6 from "assets/images/avatar6.png";

function Author({ image, name, email }) {
  return (
    <VuiBox display="flex" alignItems="center" px={1} py={0.5}>
      <VuiBox mr={2}>
        <VuiAvatar src={image} alt={name} size="sm" variant="rounded" />
      </VuiBox>
      <VuiBox display="flex" flexDirection="column">
        <VuiTypography variant="button" color="white" fontWeight="medium">
          {name}
        </VuiTypography>
        <VuiTypography variant="caption" color="text">
          {email}
        </VuiTypography>
      </VuiBox>
    </VuiBox>
  );
}

function Function({ job, org }) {
  return (
    <VuiBox display="flex" flexDirection="column">
      <VuiTypography variant="caption" fontWeight="medium" color="white">
        {job}
      </VuiTypography>
      <VuiTypography variant="caption" color="text">
        {org}
      </VuiTypography>
    </VuiBox>
  );
}

const emotions = {"Admiration" : "positive", "Amusement" : "positive", "Anger" : "negative", "Annoyance" : "negative", "Approval" : "positive", "Caring" : "positive", "Confusion" : "negative", "Curiosity" : "positive", "Desire" : "positive", "Disappointment" : "negative", "Disapproval" : "negative", "Disgust" : "negative", "Embarrassment" : "negative", "Excitement" : "positive", "Fear" : "negative", "Gratitude" : "positive", "Grief" : "negative", "Joy" : "positive", "Love" : "positive", " Nervousness" : "negative", "Optimism" : "positive", "Pride" : "negative", "Realization" : "positive", "Relief" : "positive", "Remorse" : "positive", "Sadness" : "negative", "Surprise" : "positive"};
const data = [];

for (let emotion in emotions) {
  data.push({
    emotion: <VuiTypography color="white" variant="button" fontWeight="medium">
      {emotion}
      </VuiTypography>,
    frequency: <Function job={Math.floor(Math.random() * 30)} org="times per day" />,
    type: (
      <VuiBadge
        variant="standard"
        badgeContent={emotions[emotion]}
        color={emotions[emotion] === "positive" ? "success" : "error"}
        size="xs"
        container
        sx={emotions[emotion] === "positive" ? ({ palette: { white, success }, borders: { borderRadius, borderWidth } }) => ({
          background: success.main,
          border: `${borderWidth[1]} solid ${success.main}`,
          borderRadius: borderRadius.md,
          color: white.main,
        }) :
        ({ palette: { white, error }, borders: { borderRadius, borderWidth } }) => ({
          background: error.main,
          border: `${borderWidth[1]} solid ${error.main}`,
          borderRadius: borderRadius.md,
          color: white.main,
        })}
      />
    ),
    date: (
      <VuiTypography variant="caption" color="white" fontWeight="medium">
        09/18/23
      </VuiTypography>
    )
  })
}

export default {
  columns: [
    { name: "emotion", align: "left" },
    { name: "frequency", align: "left" },
    { name: "type", align: "center" },
    { name: "date", align: "center" },
  ],

  rows: data
};
