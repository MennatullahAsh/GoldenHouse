import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Alert from '@mui/material/Alert';

import * as yup from 'yup';

import style from './style.css'
export default function FullWidthTextField() {
    const schema = yup.object().shape({
        name: yup.string().required('الاسم مطلوب'),
        mobile: yup.string().matches(/^[0-9]*$/, 'رقم الجوال يجب أن يحتوي على أرقام فقط').required('رقم الجوال مطلوب'),
    });

    const [formErrors, setFormErrors] = React.useState({});
    const [submissionStatus, setSubmissionStatus] = React.useState(null); // حالة الإرسال
    const [formData, setFormData] = React.useState({ // حالة تخزين البيانات المدخلة
        name: '',
        email: '',
        specialization: '',
        mobile: '',
        course: '',
        timing: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await schema.validate(formData, { abortEarly: false });
            console.log(formData);
            setSubmissionStatus('success');
        } catch (error) {
            const newErrors = {};
            error.inner.forEach((e) => {
                newErrors[e.path] = e.message;
            });
            setFormErrors(newErrors);
            setSubmissionStatus('error');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const courses = [
        'دورة فـن التصويـر الإحترافـي ',
        'دبلومة إعداد مصور محترف ',
        ' دبلومة تصميم الجرافيك والمونتاج الشاملة ',
        'دبلومة تصميم المواقع الإلكترونية وصفحات الويب ',
        'دبلومة برمجة المواقع الإلكترونية PHP+Laravel ',
        'دبلومة برمجة تطبيقات الهواتف الذكية_Flutter ',
        ' دبلومة الأمن السيبراني ',
        'دبلومة التسويـق الإلكترونـي ',
        ' دورة العمل الحر عبر الإنترنت_الفريلانس ',
        'دبلومة إعداد مهندس معماري معتمد ',
        ' دبلومة إعداد محاسب مالي معتمد PCFA  ',
        'دورة صيانـة الجـوالات الشاملـة ',
        ' دبلومة إعداد كهربائي منازل محترف ',
        ' دورة تصميم وتركيب أنظمة الطاقة الشمسية ',
        'دورة التحكم الكهربائي الآلي والصناعي ',
        ' دورة تركيب الكاميرات وأنظمة المراقبة ',
    ];
    const [selectedCourse, setSelectedCourse] = React.useState('');
    const handleCourseChange = (e) => {
        setSelectedCourse(e.target.value);
        setFormData((prevData) => ({
            ...prevData,
            course: e.target.value,
        }));
    };

    const handleTimingChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            timing: e.target.value,
        }));
    };

    return (
        <>
            <Typography variant="h4" gutterBottom style={
                {
                    paddingTop: '30px',
                    fontWeight: 'bold',
                    color: "#E82A36",
                    width: '80%',
                    margin: '5px auto 40px auto',
                }}>
                سجل الان باحدى دوراتنا
            </Typography>
            <Box className='boxForm'
                sx={{
                    width: 500,
                    maxWidth: '100%',
                }}>
                <form onSubmit={handleSubmit}>
                    <div className='form'>
                        <p className='form-label' >الاسم </p>
                        <TextField
                            fullWidth
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className='form-input' />
                        {formErrors.name && <div className='form-error'>{formErrors.name}</div>}
                    </div>
                    <div className='form'>
                        <p className='form-label' >الإيميل </p>
                        <TextField
                            fullWidth
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className='form-input' />
                        {formErrors.email && <div className='form-error'>{formErrors.email}</div>}
                    </div>
                    <div className='form'>
                        <p className='form-label' > التخصص </p>
                        <TextField
                            fullWidth
                            id="specialization"
                            name="specialization"
                            value={formData.specialization}
                            onChange={handleChange}
                            className='form-input' />
                        {formErrors.specialization && <div className='form-error'>{formErrors.specialization}</div>}
                    </div>
                    <div className='form'>
                        <p className='form-label' >رقم الجوال </p>
                        <TextField
                            fullWidth
                            id="mobile"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            className='form-input' />
                        {formErrors.mobile && <div className='form-error'>{formErrors.mobile}</div>}
                    </div>
                    <TextField
                        fullWidth
                        label=" الـدورة التي أرغـب بالتسجيـل بـها"
                        id="course"
                        name="course"
                        value={selectedCourse}
                        onChange={handleCourseChange}
                        className='form-input-select'
                        select>
                        {courses.map((course, index) => (
                            <MenuItem key={index} value={course}>
                                {course}
                            </MenuItem>
                        ))}
                    </TextField>
                    <FormControl>
                        <FormLabel id="radio-buttons" style={{ color: 'black' }}>
                            التوقيت المناسب لي لعقد الدورة</FormLabel>
                        <RadioGroup className='row-radio-buttons-group'
                            row
                            aria-labelledby="radio-buttons-group"
                            name="row-radio-buttons-group"
                            value={formData.timing}
                            onChange={handleTimingChange}>
                            <FormControlLabel value="صباحاً" control={<Radio />} label="صباحاً" />
                            <FormControlLabel value="ظهراً/عصراً" control={<Radio />} label="ظهراً/عصراً" />
                            <FormControlLabel value="مساءً" control={<Radio />} label="مساءً" />
                        </RadioGroup>
                    </FormControl>
                    <div style={{ clear: 'both' }}></div>
                    <button className='submit' type="submit">إرسال</button>
                    <div style={{ clear: 'both' }}></div>
                </form>
                {submissionStatus === 'error' && (
                    <Alert severity="error" style={{ marginBottom: '20px' }}>
                        يرجى مراجعة البيانات المدخلة والمحاولة مرة أخرى.
                    </Alert>
                )}
                {submissionStatus === 'success' && (
                    <Alert severity="success" style={{ marginBottom: '20px' }}>
                        تم إرسال النموذج بنجاح.
                    </Alert>
                )}
            </Box>
        </>
    );
}
