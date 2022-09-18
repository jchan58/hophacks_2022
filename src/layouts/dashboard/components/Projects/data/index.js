// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiProgress from "components/VuiProgress";
import VuiBadge from "components/VuiBadge";


export default function data() {
  const skills = {"Pronunciation and Eloquency": "positive", "Poor sentence structure and grammatical errors": "negative", "Talking over and inappropriate interuptions": "negative", "Listening": "positive", "Use of rude and vulgar language": "negative", "Use of polite and kind language": "positive", "Volume and audibility": "positive", "Talking speed": "negative"};
  const data = [];
  
  for (let skill in skills) {
    const val = Math.floor(Math.random() * 30);
    data.push({
      qualities: (
        <VuiBox display="flex" alignItems="center">
          <VuiTypography color="white" variant="button" fontWeight="medium">
            {skill}
          </VuiTypography>
        </VuiBox>
      ),
      type: (
        <VuiBadge
          variant="standard"
          badgeContent={skills[skill]}
          color={skills[skill] === "positive" ? "success" : "error"}
          size="xs"
          container
          sx={skills[skill] === "positive" ? ({ palette: { white, success }, borders: { borderRadius, borderWidth } }) => ({
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
      frequency: (
        <VuiBox width="8rem" textAlign="left">
          <VuiTypography color="white" variant="button" fontWeight="bold">
          {val}%
          </VuiTypography>
          <VuiProgress value={val} color="info" label={false} sx={{ background: "#2D2E5F" }} />
        </VuiBox>
      ),
    });
  }

  return {
    columns: [
      { name: "qualities", align: "left" },
      { name: "type", align: "center" },
      { name: "frequency", align: "center" },
    ],

    rows: data,
  };
}
