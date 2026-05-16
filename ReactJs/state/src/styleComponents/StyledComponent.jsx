
import styled from "styled-components"

// const Header=styled.h1`
// background-color:orange;
// color:white;
// font-size:40px;
// padding:30px;
// text-align:center
// `;

const Header=styled.h1({
    backgroundColor:'orange',
    color:'white',
    fontSize:'25px',
    padding:'20px',
    textAlign:'center',
})

const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 40px;
    background-color: #f4f4f4;
    flex-wrap: wrap;
    justify-content: center;

    
  
`;

const Card = styled.div`
    width: 280px;
    padding: 20px;
    background-color: white;
    box-shadow: 0 4px 20px rgba(166, 28, 28, 0.1);
    border: 1px solid #ddd;
    text-align: center;
    // transition: transform 0.3s ease;
    
    
    // &:hover {
    //     transform: translateY(-10px);
    //     }
        `;
        
    const CardTitle = styled.h2`
    color: orange;
    font-size: 22px;
    margin-bottom: 15px;
`;

const CardDescription = styled.p`
color: #666;
line-height: 1.5;
`;

const LeanoreButton = styled.button`
background-color: green;
color: white;
border: none;
padding: 10px 20px;
border-radius: 5px;
cursor: pointer;


&:hover {
    
cursor: pointer;

box-shadow: 0 4px 20px rgba(166, 28, 28, 0.1);
      

    }

`




const StyledComponent = ()=>{
    return(
        <div>
            <Header>Styled Components Showcase</Header>
            <Container>
                <Card>
                    <CardTitle>Web Design</CardTitle>
                    <CardDescription>Creating beautiful and responsive user interfaces.
                        Web design is the art of planning, arranging, and creating the visual layout and interactive experience of websites. It focuses heavily on front-end user experience (UX) and user interface (UI) rather than backend software coding.
                        
                    </CardDescription>
                    <LeanoreButton>Learn More</LeanoreButton>
                </Card>
                <Card>
                    <CardTitle>Development</CardTitle>
                    <CardDescription>Building robust and scalable applications using React.
                        Web development is the structural building and coding that brings web designs to life, focusing entirely on a website's functional mechanics, interactivity, and database security. While web design deals with visual styling,
                    </CardDescription>
                    <LeanoreButton>Learn More</LeanoreButton>
                </Card>
                <Card>
                    <CardTitle>SEO Optimization</CardTitle>
                    <CardDescription>
                        SEO optimization (Search Engine Optimization) is the process of improving a website to increase its visibility when people search for products, services, or information on search engines like Google
                        Improving visibility and ranking on search engines.</CardDescription>
                    <LeanoreButton>Learn More</LeanoreButton>

                </Card>
            </Container>
        </div>
    )
}
export default StyledComponent;