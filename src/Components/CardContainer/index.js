import MediaCard from "../Cardes";
import { Grid } from "@mui/material";
import Footer from "../Footer";

const CardContainer = ({ courses }) => {
  return (
    <div>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        style={{
          justifyContent: 'center',
          padding: '0 15px',
          margin: '15px 0',
        }}
      >
        {courses.map((course, index) => (
          <Grid
            xs={12}
            sm={4}
            md={4}
            key={index}
            style={{
              margin: '25px 0',
            }}
          >
            <MediaCard courses={course} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default CardContainer;
