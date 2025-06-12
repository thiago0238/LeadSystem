

export interface EnrolledCourse {
    id: number;
    fullname: string;
    shortname: string;
}
export interface Dashboard {
    id: number;
    username: string;
    firstname: string;
    lastname?: string;
    fullname: string;
    email: string;
    department?: string;
    firstaccess: number;
    lastaccess: number;
    lastcourseaccess: number;
    description: string;
    descriptionformat: number;
    profileimageurlsmall: string;
    profileimageurl: string;
    city: string;
    country: string;
    roles?: string[] | null;
    preferences?: string[] | null;
    enrolledcourses?: EnrolledCourse[] | null;
}