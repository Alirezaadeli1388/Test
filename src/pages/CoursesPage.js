import Header from '../component/Header';
import Footer from '../component/Footer';
import SearchBar from "../component/SearchBar";
import Button from "../component/Button";
import ThinkingInCodeImage from '../style/ThinkingInCode.png';
import ExploringDataVisuallyImage from '../style/Exploring Data Visually.png';
import SolvingEquationsImage from '../style/Solving Equations.png';
import ScientificThinkingImage from '../style/Scientific Thinking.png';

function CoursesPage() {
    const Search = () => {
        return (
            <div className="search-section">
                <h1>بین بیش از 100 درس موجود جستوجو کنید</h1>
                <SearchBar />
                <div className="Topics-btn">
                    <a href='/Educational-Site/courses-page#new'><Button solid autoFocus >دروس جدید</Button></a>
                    <a href='/Educational-Site/courses-page#math'><Button solid>ریاضی</Button></a>
                    <a href='/Educational-Site/courses-page#data'><Button solid>داده</Button></a>
                    <a href='/Educational-Site/courses-page#computer'><Button solid>علوم کامپیوتر</Button></a >
                    <a href='/Educational-Site/courses-page#science'><Button solid>علوم</Button></a >
                </div >
            </div>
        );
    };

    const Courses = () => {
        return (
            <div>
                <div className="Topic" id='new'>
                    <h1>دروس جدید</h1>
                    <div className="courses">
                        <div className="course">
                            <h2>جدید</h2>
                            <img src={ThinkingInCodeImage} alt='Course pic' />
                            <h3>تفکر در کد</h3>
                        </div>
                        <div className="course">
                            <h2>جدید</h2>
                            <img src={ExploringDataVisuallyImage} alt='Course pic' />
                            <h3>کاوش بصری داده ها</h3>
                        </div>
                    </div>
                </div>
                <div className="Topic" id='math'>
                    <h1>ریاضیات</h1>
                    <h2>جبر</h2>
                    <div className="courses">
                        <div className="course">
                            <img src={SolvingEquationsImage} alt='Course pic' />
                            <h3>حل معادلات</h3>
                        </div>
                    </div>
                </div>
                <div className="Topic" id='data'>
                    <h1>داده</h1>
                    <h2>تحلیل و بررسی</h2>
                    <div className="courses">
                        <div className="course">
                            <h2>جدید</h2>
                            <img src={ExploringDataVisuallyImage} alt='Course pic' />
                            <h3>کاوش بصری داده ها</h3>
                        </div>
                    </div>
                </div>
                <div className="Topic" id='computer'>
                    <h1>علوم کامپیوتر</h1>
                    <h2>علوم کامپیوتر پایه</h2>
                    <div className="courses">
                        <div className="course">
                            <h2>جدید</h2>
                            <img src={ThinkingInCodeImage} alt='Course pic' />
                            <h3>تفکر در کد</h3>
                        </div>
                    </div>
                </div>
                <div className="Topic" id='science'>
                    <h1>علوم پایه</h1>
                    <h2>تفکر علمی</h2>
                    <div className="courses">
                    <div className="course">
                            <img src={ScientificThinkingImage} alt='Course pic' />
                            <h3>تفکر علمی</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    };


    return (
        <div>
            <Header />
            <Search />
            <Courses />
            <Footer />
        </div>
    );
}

export default CoursesPage;