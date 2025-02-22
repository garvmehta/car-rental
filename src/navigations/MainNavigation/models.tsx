import { NavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';






export interface Screen {
    name: keyof RootStackParamList,
    screen: any,
    initailParams?: any,
    options?:any
}


export type RootStackParamList = {

    Onboarding:undefined,
    Login:undefined,
    BottomNavigation:undefined,
    Eligibility:undefined,
    ApplyProcess:undefined,
    VisaDetails:undefined
    Reviews:undefined
    SelectedPerson:undefined
    TravelVisaForm:undefined
    WorkVisaForm:undefined
    StudentVisaForm:undefined
    CompleteProfile:undefined
    Orders:undefined
    AddReview:undefined
    EditProfile:undefined
    Searching:undefined
}

export type RootNavigationProp = NavigationProp<
 StackNavigationProp<RootStackParamList>
>;

