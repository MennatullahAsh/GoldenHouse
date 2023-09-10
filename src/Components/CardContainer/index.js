
import MediaCard from "../Cardes";
import { Grid } from "@mui/material";
import Footer from "../Footer"
const CardContainer = ({ courses }) => {
  return (

    <div>
      <Footer />
      <Grid style={{
        marginBottom: '30px'
      }} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {courses.map((courses, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <MediaCard courses={courses} />
          </Grid>
        ))}
      </Grid>
    </div>


  );
}

export default CardContainer;
