

// @mui material components
import Card from "@mui/material/Card";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// React icons
import { BsCheckCircleFill } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { BsCreditCardFill } from "react-icons/bs";
import { SiDropbox } from "react-icons/si";

// Vision UI Dashboard React example components
import TimelineItem from "examples/Timeline/TimelineItem";
import AdobeXD from "examples/Icons/AdobeXD";

// Vision UI Dashboard theme imports
import palette from "assets/theme/base/colors";

function OrdersOverview() {
  return (
    <Card className="h-100">
      <VuiBox mb="16px">
        <VuiTypography variant="lg" fontWeight="bold" mb="5px" color="white">
          Phrases overview
        </VuiTypography>
        <VuiBox mb={2}>
          <VuiBox display="flex" alignItems="center">
            <BsCheckCircleFill color="green" size="15px" mr="5px" />
            <VuiTypography variant="button" color="text" fontWeight="medium" ml="5px" mr="2px">
              Positive
            </VuiTypography>{" "}
            <VuiTypography variant="button" color="text" fontWeight="regular">
              {" "}
              this month
            </VuiTypography>
          </VuiBox>
        </VuiBox>
      </VuiBox>
      <VuiBox>
        <TimelineItem
          title="Thank you"
          dateTime="used 56 times"
        />
        <TimelineItem
          title="Please"
          dateTime="used 102 times"
        />
        <TimelineItem
          title="I am sorry"
          dateTime="used 12 times"
        />
      </VuiBox>
        
      <VuiBox mb={2}>
        <VuiBox display="flex" alignItems="center">
          <ImCancelCircle color="red" size="15px" mr="5px" />
          <VuiTypography variant="button" color="text" fontWeight="medium" ml="5px" mr="2px">
            Negative
          </VuiTypography>{" "}
          <VuiTypography variant="button" color="text" fontWeight="regular">
            {" "}
            this month
          </VuiTypography>
        </VuiBox>
      </VuiBox>

      <VuiBox>
        <TimelineItem
          title="I hate my job"
          dateTime="used 12 times"
        />
        <TimelineItem
          title="I hate my life"
          dateTime="used 23 times"
        />
        <TimelineItem title="I want to kill myself" dateTime="used 2 times" />
      </VuiBox>
    </Card>
  );
}

export default OrdersOverview;
