/* eslint-disable */
import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type BookChapter = {
   __typename?: 'BookChapter',
  label: Scalars['String'],
  url?: Maybe<Scalars['String']>,
  sections?: Maybe<Array<BookSection>>,
};

export type BookDownload = {
   __typename?: 'BookDownload',
  label: Scalars['String'],
  data?: Maybe<BookDownloadData>,
};

export type BookDownloadData = {
   __typename?: 'BookDownloadData',
  label: Scalars['String'],
  items: Array<BookDownloadItem>,
};

export type BookDownloadItem = {
   __typename?: 'BookDownloadItem',
  label: Scalars['String'],
  description: Scalars['String'],
  url: Scalars['String'],
  fileName: Scalars['String'],
};

export type BookOnline = {
   __typename?: 'BookOnline',
  label: Scalars['String'],
  data?: Maybe<BookOnlineData>,
};

export type BookOnlineData = {
   __typename?: 'BookOnlineData',
  chapters: Array<BookChapter>,
};

export type BookSection = {
   __typename?: 'BookSection',
  label: Scalars['String'],
  url: Scalars['String'],
};

export type Bundle = {
   __typename?: 'Bundle',
  header: Scalars['String'],
  bundleId: BundleId,
  price: Scalars['Int'],
  imageUrl: Scalars['String'],
};

export enum BundleId {
  Student = 'STUDENT',
  Intermediate = 'INTERMEDIATE',
  Professional = 'PROFESSIONAL'
}

export enum CourseId {
  TheRoadToLearnReact = 'THE_ROAD_TO_LEARN_REACT',
  TamingTheState = 'TAMING_THE_STATE',
  TheRoadToGraphql = 'THE_ROAD_TO_GRAPHQL',
  TheRoadToReactWithFirebase = 'THE_ROAD_TO_REACT_WITH_FIREBASE'
}

export type Curriculum = {
   __typename?: 'Curriculum',
  label: Scalars['String'],
  data?: Maybe<CurriculumData>,
};

export type CurriculumData = {
   __typename?: 'CurriculumData',
  sections: Array<CurriculumSection>,
};

export type CurriculumItem = {
   __typename?: 'CurriculumItem',
  label: Scalars['String'],
  url: Scalars['String'],
  description: Scalars['String'],
  kind: Kind,
  secondaryUrl?: Maybe<Scalars['String']>,
};

export type CurriculumSection = {
   __typename?: 'CurriculumSection',
  label: Scalars['String'],
  items: Array<CurriculumItem>,
};

export type File = {
   __typename?: 'File',
  fileName: Scalars['String'],
  contentType: Scalars['String'],
  body: Scalars['String'],
};

export type Introduction = {
   __typename?: 'Introduction',
  label: Scalars['String'],
  data?: Maybe<IntroductionData>,
};

export type IntroductionData = {
   __typename?: 'IntroductionData',
  label: Scalars['String'],
  url: Scalars['String'],
  description: Scalars['String'],
};

export enum Kind {
  Article = 'Article',
  Video = 'Video'
}

export type Markdown = {
   __typename?: 'Markdown',
  body: Scalars['String'],
};

export type Mutation = {
   __typename?: 'Mutation',
  _?: Maybe<Scalars['Boolean']>,
  signIn: SessionToken,
  signUp: SessionToken,
  passwordForgot?: Maybe<Scalars['Boolean']>,
  passwordChange?: Maybe<Scalars['Boolean']>,
  paypalCreateOrder: OrderId,
  paypalApproveOrder?: Maybe<Scalars['Boolean']>,
  stripeCreateOrder: StripeId,
  createFreeCourse: Scalars['Boolean'],
  createAdminCourse: Scalars['Boolean'],
};


export type MutationSignInArgs = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type MutationSignUpArgs = {
  username: Scalars['String'],
  email: Scalars['String'],
  password: Scalars['String']
};


export type MutationPasswordForgotArgs = {
  email: Scalars['String']
};


export type MutationPasswordChangeArgs = {
  password: Scalars['String']
};


export type MutationPaypalCreateOrderArgs = {
  courseId: CourseId,
  bundleId: BundleId,
  coupon?: Maybe<Scalars['String']>
};


export type MutationPaypalApproveOrderArgs = {
  orderId: Scalars['String']
};


export type MutationStripeCreateOrderArgs = {
  imageUrl: Scalars['String'],
  courseId: CourseId,
  bundleId: BundleId,
  coupon?: Maybe<Scalars['String']>
};


export type MutationCreateFreeCourseArgs = {
  courseId: CourseId,
  bundleId: BundleId
};


export type MutationCreateAdminCourseArgs = {
  uid: Scalars['String'],
  courseId: CourseId,
  bundleId: BundleId
};

export type Onboarding = {
   __typename?: 'Onboarding',
  label: Scalars['String'],
  data?: Maybe<OnboardingData>,
};

export type OnboardingData = {
   __typename?: 'OnboardingData',
  label: Scalars['String'],
  url: Scalars['String'],
  description: Scalars['String'],
};

export type OrderId = {
   __typename?: 'OrderId',
  orderId: Scalars['String'],
};

export type Query = {
   __typename?: 'Query',
  _?: Maybe<Scalars['Boolean']>,
  me?: Maybe<User>,
  storefrontCourse?: Maybe<StorefrontCourse>,
  storefrontCourses: Array<StorefrontCourse>,
  unlockedCourses: Array<UnlockedCourseMeta>,
  unlockedCourse?: Maybe<UnlockedCourse>,
  book: File,
  onlineChapter: Markdown,
};


export type QueryStorefrontCourseArgs = {
  courseId: CourseId,
  bundleId: BundleId
};


export type QueryUnlockedCourseArgs = {
  courseId: CourseId
};


export type QueryBookArgs = {
  path: Scalars['String'],
  fileName: Scalars['String']
};


export type QueryOnlineChapterArgs = {
  path: Scalars['String']
};

export type SessionToken = {
   __typename?: 'SessionToken',
  sessionToken: Scalars['String'],
};

export type StorefrontCourse = {
   __typename?: 'StorefrontCourse',
  header: Scalars['String'],
  courseId: CourseId,
  url: Scalars['String'],
  imageUrl?: Maybe<Scalars['String']>,
  bundle: Bundle,
};

export type StripeId = {
   __typename?: 'StripeId',
  id: Scalars['String'],
};

export type Subscription = {
   __typename?: 'Subscription',
  _?: Maybe<Scalars['Boolean']>,
};

export type UnlockedCourse = {
   __typename?: 'UnlockedCourse',
  courseId: CourseId,
  bundleId: BundleId,
  header: Scalars['String'],
  url: Scalars['String'],
  imageUrl: Scalars['String'],
  canUpgrade: Scalars['Boolean'],
  introduction?: Maybe<Introduction>,
  onboarding?: Maybe<Onboarding>,
  bookDownload?: Maybe<BookDownload>,
  bookOnline?: Maybe<BookOnline>,
  curriculum?: Maybe<Curriculum>,
};

export type UnlockedCourseMeta = {
   __typename?: 'UnlockedCourseMeta',
  courseId: CourseId,
  header: Scalars['String'],
  url: Scalars['String'],
  imageUrl: Scalars['String'],
  canUpgrade: Scalars['Boolean'],
};

export type User = {
   __typename?: 'User',
  email: Scalars['String'],
  uid: Scalars['String'],
};

export type GetBookQueryVariables = {
  path: Scalars['String'],
  fileName: Scalars['String']
};


export type GetBookQuery = (
  { __typename?: 'Query' }
  & { book: (
    { __typename?: 'File' }
    & Pick<File, 'body' | 'contentType' | 'fileName'>
  ) }
);

export type GetOnlineChapterQueryVariables = {
  path: Scalars['String']
};


export type GetOnlineChapterQuery = (
  { __typename?: 'Query' }
  & { onlineChapter: (
    { __typename?: 'Markdown' }
    & Pick<Markdown, 'body'>
  ) }
);

export type GetCoursesQueryVariables = {};


export type GetCoursesQuery = (
  { __typename?: 'Query' }
  & { unlockedCourses: Array<(
    { __typename?: 'UnlockedCourseMeta' }
    & Pick<UnlockedCourseMeta, 'courseId' | 'header' | 'url' | 'imageUrl' | 'canUpgrade'>
  )> }
);

export type GetCourseQueryVariables = {
  courseId: CourseId
};


export type GetCourseQuery = (
  { __typename?: 'Query' }
  & { unlockedCourse: Maybe<(
    { __typename?: 'UnlockedCourse' }
    & Pick<UnlockedCourse, 'courseId' | 'header' | 'url' | 'canUpgrade'>
    & { introduction: Maybe<(
      { __typename?: 'Introduction' }
      & Pick<Introduction, 'label'>
      & { data: Maybe<(
        { __typename?: 'IntroductionData' }
        & Pick<IntroductionData, 'label' | 'description' | 'url'>
      )> }
    )>, onboarding: Maybe<(
      { __typename?: 'Onboarding' }
      & Pick<Onboarding, 'label'>
      & { data: Maybe<(
        { __typename?: 'OnboardingData' }
        & Pick<OnboardingData, 'label' | 'description' | 'url'>
      )> }
    )>, bookDownload: Maybe<(
      { __typename?: 'BookDownload' }
      & Pick<BookDownload, 'label'>
      & { data: Maybe<(
        { __typename?: 'BookDownloadData' }
        & { items: Array<(
          { __typename?: 'BookDownloadItem' }
          & Pick<BookDownloadItem, 'label' | 'description' | 'url' | 'fileName'>
        )> }
      )> }
    )>, bookOnline: Maybe<(
      { __typename?: 'BookOnline' }
      & Pick<BookOnline, 'label'>
      & { data: Maybe<(
        { __typename?: 'BookOnlineData' }
        & { chapters: Array<(
          { __typename?: 'BookChapter' }
          & Pick<BookChapter, 'label' | 'url'>
          & { sections: Maybe<Array<(
            { __typename?: 'BookSection' }
            & Pick<BookSection, 'label' | 'url'>
          )>> }
        )> }
      )> }
    )>, curriculum: Maybe<(
      { __typename?: 'Curriculum' }
      & Pick<Curriculum, 'label'>
      & { data: Maybe<(
        { __typename?: 'CurriculumData' }
        & { sections: Array<(
          { __typename?: 'CurriculumSection' }
          & Pick<CurriculumSection, 'label'>
          & { items: Array<(
            { __typename?: 'CurriculumItem' }
            & Pick<CurriculumItem, 'kind' | 'label' | 'description' | 'url' | 'secondaryUrl'>
          )> }
        )> }
      )> }
    )> }
  )> }
);

export type CreateFreeCourseMutationVariables = {
  courseId: CourseId,
  bundleId: BundleId
};


export type CreateFreeCourseMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'createFreeCourse'>
);

export type CreateAdminCourseMutationVariables = {
  uid: Scalars['String'],
  courseId: CourseId,
  bundleId: BundleId
};


export type CreateAdminCourseMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'createAdminCourse'>
);

export type PaypalCreateOrderMutationVariables = {
  courseId: CourseId,
  bundleId: BundleId,
  coupon?: Maybe<Scalars['String']>
};


export type PaypalCreateOrderMutation = (
  { __typename?: 'Mutation' }
  & { paypalCreateOrder: (
    { __typename?: 'OrderId' }
    & Pick<OrderId, 'orderId'>
  ) }
);

export type PaypalApproveOrderMutationVariables = {
  orderId: Scalars['String']
};


export type PaypalApproveOrderMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'paypalApproveOrder'>
);

export type SignUpMutationVariables = {
  username: Scalars['String'],
  email: Scalars['String'],
  password: Scalars['String']
};


export type SignUpMutation = (
  { __typename?: 'Mutation' }
  & { signUp: (
    { __typename?: 'SessionToken' }
    & Pick<SessionToken, 'sessionToken'>
  ) }
);

export type SignInMutationVariables = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type SignInMutation = (
  { __typename?: 'Mutation' }
  & { signIn: (
    { __typename?: 'SessionToken' }
    & Pick<SessionToken, 'sessionToken'>
  ) }
);

export type PasswordChangeMutationVariables = {
  password: Scalars['String']
};


export type PasswordChangeMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'passwordChange'>
);

export type PasswordForgotMutationVariables = {
  email: Scalars['String']
};


export type PasswordForgotMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'passwordForgot'>
);

export type GetStorefrontCourseQueryVariables = {
  courseId: CourseId,
  bundleId: BundleId
};


export type GetStorefrontCourseQuery = (
  { __typename?: 'Query' }
  & { storefrontCourse: Maybe<(
    { __typename?: 'StorefrontCourse' }
    & Pick<StorefrontCourse, 'header' | 'courseId'>
    & { bundle: (
      { __typename?: 'Bundle' }
      & Pick<Bundle, 'header' | 'bundleId' | 'price' | 'imageUrl'>
    ) }
  )> }
);

export type GetStorefrontCoursesQueryVariables = {};


export type GetStorefrontCoursesQuery = (
  { __typename?: 'Query' }
  & { storefrontCourses: Array<(
    { __typename?: 'StorefrontCourse' }
    & Pick<StorefrontCourse, 'header' | 'courseId' | 'url' | 'imageUrl'>
  )> }
);

export type StripeCreateOrderMutationVariables = {
  imageUrl: Scalars['String'],
  courseId: CourseId,
  bundleId: BundleId,
  coupon?: Maybe<Scalars['String']>
};


export type StripeCreateOrderMutation = (
  { __typename?: 'Mutation' }
  & { stripeCreateOrder: (
    { __typename?: 'StripeId' }
    & Pick<StripeId, 'id'>
  ) }
);

export type GetMeQueryVariables = {};


export type GetMeQuery = (
  { __typename?: 'Query' }
  & { me: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'uid' | 'email'>
  )> }
);


export const GetBookDocument = gql`
    query GetBook($path: String!, $fileName: String!) {
  book(path: $path, fileName: $fileName) {
    body
    contentType
    fileName
  }
}
    `;

/**
 * __useGetBookQuery__
 *
 * To run a query within a React component, call `useGetBookQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBookQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBookQuery({
 *   variables: {
 *      path: // value for 'path'
 *      fileName: // value for 'fileName'
 *   },
 * });
 */
export function useGetBookQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetBookQuery, GetBookQueryVariables>) {
        return ApolloReactHooks.useQuery<GetBookQuery, GetBookQueryVariables>(GetBookDocument, baseOptions);
      }
export function useGetBookLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetBookQuery, GetBookQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetBookQuery, GetBookQueryVariables>(GetBookDocument, baseOptions);
        }
export type GetBookQueryHookResult = ReturnType<typeof useGetBookQuery>;
export type GetBookLazyQueryHookResult = ReturnType<typeof useGetBookLazyQuery>;
export type GetBookQueryResult = ApolloReactCommon.QueryResult<GetBookQuery, GetBookQueryVariables>;
export const GetOnlineChapterDocument = gql`
    query GetOnlineChapter($path: String!) {
  onlineChapter(path: $path) {
    body
  }
}
    `;

/**
 * __useGetOnlineChapterQuery__
 *
 * To run a query within a React component, call `useGetOnlineChapterQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOnlineChapterQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOnlineChapterQuery({
 *   variables: {
 *      path: // value for 'path'
 *   },
 * });
 */
export function useGetOnlineChapterQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetOnlineChapterQuery, GetOnlineChapterQueryVariables>) {
        return ApolloReactHooks.useQuery<GetOnlineChapterQuery, GetOnlineChapterQueryVariables>(GetOnlineChapterDocument, baseOptions);
      }
export function useGetOnlineChapterLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetOnlineChapterQuery, GetOnlineChapterQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetOnlineChapterQuery, GetOnlineChapterQueryVariables>(GetOnlineChapterDocument, baseOptions);
        }
export type GetOnlineChapterQueryHookResult = ReturnType<typeof useGetOnlineChapterQuery>;
export type GetOnlineChapterLazyQueryHookResult = ReturnType<typeof useGetOnlineChapterLazyQuery>;
export type GetOnlineChapterQueryResult = ApolloReactCommon.QueryResult<GetOnlineChapterQuery, GetOnlineChapterQueryVariables>;
export const GetCoursesDocument = gql`
    query GetCourses {
  unlockedCourses {
    courseId
    header
    url
    imageUrl
    canUpgrade
  }
}
    `;

/**
 * __useGetCoursesQuery__
 *
 * To run a query within a React component, call `useGetCoursesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCoursesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCoursesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCoursesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetCoursesQuery, GetCoursesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetCoursesQuery, GetCoursesQueryVariables>(GetCoursesDocument, baseOptions);
      }
export function useGetCoursesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCoursesQuery, GetCoursesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetCoursesQuery, GetCoursesQueryVariables>(GetCoursesDocument, baseOptions);
        }
export type GetCoursesQueryHookResult = ReturnType<typeof useGetCoursesQuery>;
export type GetCoursesLazyQueryHookResult = ReturnType<typeof useGetCoursesLazyQuery>;
export type GetCoursesQueryResult = ApolloReactCommon.QueryResult<GetCoursesQuery, GetCoursesQueryVariables>;
export const GetCourseDocument = gql`
    query GetCourse($courseId: CourseId!) {
  unlockedCourse(courseId: $courseId) {
    courseId
    header
    url
    canUpgrade
    introduction {
      label
      data {
        label
        description
        url
      }
    }
    onboarding {
      label
      data {
        label
        description
        url
      }
    }
    bookDownload {
      label
      data {
        items {
          label
          description
          url
          fileName
        }
      }
    }
    bookOnline {
      label
      data {
        chapters {
          label
          url
          sections {
            label
            url
          }
        }
      }
    }
    curriculum {
      label
      data {
        sections {
          label
          items {
            kind
            label
            description
            url
            secondaryUrl
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetCourseQuery__
 *
 * To run a query within a React component, call `useGetCourseQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCourseQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCourseQuery({
 *   variables: {
 *      courseId: // value for 'courseId'
 *   },
 * });
 */
export function useGetCourseQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetCourseQuery, GetCourseQueryVariables>) {
        return ApolloReactHooks.useQuery<GetCourseQuery, GetCourseQueryVariables>(GetCourseDocument, baseOptions);
      }
export function useGetCourseLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCourseQuery, GetCourseQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetCourseQuery, GetCourseQueryVariables>(GetCourseDocument, baseOptions);
        }
export type GetCourseQueryHookResult = ReturnType<typeof useGetCourseQuery>;
export type GetCourseLazyQueryHookResult = ReturnType<typeof useGetCourseLazyQuery>;
export type GetCourseQueryResult = ApolloReactCommon.QueryResult<GetCourseQuery, GetCourseQueryVariables>;
export const CreateFreeCourseDocument = gql`
    mutation CreateFreeCourse($courseId: CourseId!, $bundleId: BundleId!) {
  createFreeCourse(courseId: $courseId, bundleId: $bundleId)
}
    `;
export type CreateFreeCourseMutationFn = ApolloReactCommon.MutationFunction<CreateFreeCourseMutation, CreateFreeCourseMutationVariables>;

/**
 * __useCreateFreeCourseMutation__
 *
 * To run a mutation, you first call `useCreateFreeCourseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFreeCourseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFreeCourseMutation, { data, loading, error }] = useCreateFreeCourseMutation({
 *   variables: {
 *      courseId: // value for 'courseId'
 *      bundleId: // value for 'bundleId'
 *   },
 * });
 */
export function useCreateFreeCourseMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateFreeCourseMutation, CreateFreeCourseMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateFreeCourseMutation, CreateFreeCourseMutationVariables>(CreateFreeCourseDocument, baseOptions);
      }
export type CreateFreeCourseMutationHookResult = ReturnType<typeof useCreateFreeCourseMutation>;
export type CreateFreeCourseMutationResult = ApolloReactCommon.MutationResult<CreateFreeCourseMutation>;
export type CreateFreeCourseMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateFreeCourseMutation, CreateFreeCourseMutationVariables>;
export const CreateAdminCourseDocument = gql`
    mutation CreateAdminCourse($uid: String!, $courseId: CourseId!, $bundleId: BundleId!) {
  createAdminCourse(uid: $uid, courseId: $courseId, bundleId: $bundleId)
}
    `;
export type CreateAdminCourseMutationFn = ApolloReactCommon.MutationFunction<CreateAdminCourseMutation, CreateAdminCourseMutationVariables>;

/**
 * __useCreateAdminCourseMutation__
 *
 * To run a mutation, you first call `useCreateAdminCourseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAdminCourseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAdminCourseMutation, { data, loading, error }] = useCreateAdminCourseMutation({
 *   variables: {
 *      uid: // value for 'uid'
 *      courseId: // value for 'courseId'
 *      bundleId: // value for 'bundleId'
 *   },
 * });
 */
export function useCreateAdminCourseMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateAdminCourseMutation, CreateAdminCourseMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateAdminCourseMutation, CreateAdminCourseMutationVariables>(CreateAdminCourseDocument, baseOptions);
      }
export type CreateAdminCourseMutationHookResult = ReturnType<typeof useCreateAdminCourseMutation>;
export type CreateAdminCourseMutationResult = ApolloReactCommon.MutationResult<CreateAdminCourseMutation>;
export type CreateAdminCourseMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateAdminCourseMutation, CreateAdminCourseMutationVariables>;
export const PaypalCreateOrderDocument = gql`
    mutation PaypalCreateOrder($courseId: CourseId!, $bundleId: BundleId!, $coupon: String) {
  paypalCreateOrder(courseId: $courseId, bundleId: $bundleId, coupon: $coupon) {
    orderId
  }
}
    `;
export type PaypalCreateOrderMutationFn = ApolloReactCommon.MutationFunction<PaypalCreateOrderMutation, PaypalCreateOrderMutationVariables>;

/**
 * __usePaypalCreateOrderMutation__
 *
 * To run a mutation, you first call `usePaypalCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePaypalCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [paypalCreateOrderMutation, { data, loading, error }] = usePaypalCreateOrderMutation({
 *   variables: {
 *      courseId: // value for 'courseId'
 *      bundleId: // value for 'bundleId'
 *      coupon: // value for 'coupon'
 *   },
 * });
 */
export function usePaypalCreateOrderMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<PaypalCreateOrderMutation, PaypalCreateOrderMutationVariables>) {
        return ApolloReactHooks.useMutation<PaypalCreateOrderMutation, PaypalCreateOrderMutationVariables>(PaypalCreateOrderDocument, baseOptions);
      }
export type PaypalCreateOrderMutationHookResult = ReturnType<typeof usePaypalCreateOrderMutation>;
export type PaypalCreateOrderMutationResult = ApolloReactCommon.MutationResult<PaypalCreateOrderMutation>;
export type PaypalCreateOrderMutationOptions = ApolloReactCommon.BaseMutationOptions<PaypalCreateOrderMutation, PaypalCreateOrderMutationVariables>;
export const PaypalApproveOrderDocument = gql`
    mutation PaypalApproveOrder($orderId: String!) {
  paypalApproveOrder(orderId: $orderId)
}
    `;
export type PaypalApproveOrderMutationFn = ApolloReactCommon.MutationFunction<PaypalApproveOrderMutation, PaypalApproveOrderMutationVariables>;

/**
 * __usePaypalApproveOrderMutation__
 *
 * To run a mutation, you first call `usePaypalApproveOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePaypalApproveOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [paypalApproveOrderMutation, { data, loading, error }] = usePaypalApproveOrderMutation({
 *   variables: {
 *      orderId: // value for 'orderId'
 *   },
 * });
 */
export function usePaypalApproveOrderMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<PaypalApproveOrderMutation, PaypalApproveOrderMutationVariables>) {
        return ApolloReactHooks.useMutation<PaypalApproveOrderMutation, PaypalApproveOrderMutationVariables>(PaypalApproveOrderDocument, baseOptions);
      }
export type PaypalApproveOrderMutationHookResult = ReturnType<typeof usePaypalApproveOrderMutation>;
export type PaypalApproveOrderMutationResult = ApolloReactCommon.MutationResult<PaypalApproveOrderMutation>;
export type PaypalApproveOrderMutationOptions = ApolloReactCommon.BaseMutationOptions<PaypalApproveOrderMutation, PaypalApproveOrderMutationVariables>;
export const SignUpDocument = gql`
    mutation SignUp($username: String!, $email: String!, $password: String!) {
  signUp(username: $username, email: $email, password: $password) {
    sessionToken
  }
}
    `;
export type SignUpMutationFn = ApolloReactCommon.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        return ApolloReactHooks.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, baseOptions);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = ApolloReactCommon.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = ApolloReactCommon.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const SignInDocument = gql`
    mutation SignIn($email: String!, $password: String!) {
  signIn(email: $email, password: $password) {
    sessionToken
  }
}
    `;
export type SignInMutationFn = ApolloReactCommon.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
        return ApolloReactHooks.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, baseOptions);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = ApolloReactCommon.MutationResult<SignInMutation>;
export type SignInMutationOptions = ApolloReactCommon.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
export const PasswordChangeDocument = gql`
    mutation PasswordChange($password: String!) {
  passwordChange(password: $password)
}
    `;
export type PasswordChangeMutationFn = ApolloReactCommon.MutationFunction<PasswordChangeMutation, PasswordChangeMutationVariables>;

/**
 * __usePasswordChangeMutation__
 *
 * To run a mutation, you first call `usePasswordChangeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePasswordChangeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [passwordChangeMutation, { data, loading, error }] = usePasswordChangeMutation({
 *   variables: {
 *      password: // value for 'password'
 *   },
 * });
 */
export function usePasswordChangeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<PasswordChangeMutation, PasswordChangeMutationVariables>) {
        return ApolloReactHooks.useMutation<PasswordChangeMutation, PasswordChangeMutationVariables>(PasswordChangeDocument, baseOptions);
      }
export type PasswordChangeMutationHookResult = ReturnType<typeof usePasswordChangeMutation>;
export type PasswordChangeMutationResult = ApolloReactCommon.MutationResult<PasswordChangeMutation>;
export type PasswordChangeMutationOptions = ApolloReactCommon.BaseMutationOptions<PasswordChangeMutation, PasswordChangeMutationVariables>;
export const PasswordForgotDocument = gql`
    mutation PasswordForgot($email: String!) {
  passwordForgot(email: $email)
}
    `;
export type PasswordForgotMutationFn = ApolloReactCommon.MutationFunction<PasswordForgotMutation, PasswordForgotMutationVariables>;

/**
 * __usePasswordForgotMutation__
 *
 * To run a mutation, you first call `usePasswordForgotMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePasswordForgotMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [passwordForgotMutation, { data, loading, error }] = usePasswordForgotMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function usePasswordForgotMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<PasswordForgotMutation, PasswordForgotMutationVariables>) {
        return ApolloReactHooks.useMutation<PasswordForgotMutation, PasswordForgotMutationVariables>(PasswordForgotDocument, baseOptions);
      }
export type PasswordForgotMutationHookResult = ReturnType<typeof usePasswordForgotMutation>;
export type PasswordForgotMutationResult = ApolloReactCommon.MutationResult<PasswordForgotMutation>;
export type PasswordForgotMutationOptions = ApolloReactCommon.BaseMutationOptions<PasswordForgotMutation, PasswordForgotMutationVariables>;
export const GetStorefrontCourseDocument = gql`
    query GetStorefrontCourse($courseId: CourseId!, $bundleId: BundleId!) {
  storefrontCourse(courseId: $courseId, bundleId: $bundleId) {
    header
    courseId
    bundle {
      header
      bundleId
      price
      imageUrl
    }
  }
}
    `;

/**
 * __useGetStorefrontCourseQuery__
 *
 * To run a query within a React component, call `useGetStorefrontCourseQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStorefrontCourseQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStorefrontCourseQuery({
 *   variables: {
 *      courseId: // value for 'courseId'
 *      bundleId: // value for 'bundleId'
 *   },
 * });
 */
export function useGetStorefrontCourseQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetStorefrontCourseQuery, GetStorefrontCourseQueryVariables>) {
        return ApolloReactHooks.useQuery<GetStorefrontCourseQuery, GetStorefrontCourseQueryVariables>(GetStorefrontCourseDocument, baseOptions);
      }
export function useGetStorefrontCourseLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetStorefrontCourseQuery, GetStorefrontCourseQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetStorefrontCourseQuery, GetStorefrontCourseQueryVariables>(GetStorefrontCourseDocument, baseOptions);
        }
export type GetStorefrontCourseQueryHookResult = ReturnType<typeof useGetStorefrontCourseQuery>;
export type GetStorefrontCourseLazyQueryHookResult = ReturnType<typeof useGetStorefrontCourseLazyQuery>;
export type GetStorefrontCourseQueryResult = ApolloReactCommon.QueryResult<GetStorefrontCourseQuery, GetStorefrontCourseQueryVariables>;
export const GetStorefrontCoursesDocument = gql`
    query GetStorefrontCourses {
  storefrontCourses {
    header
    courseId
    url
    imageUrl
  }
}
    `;

/**
 * __useGetStorefrontCoursesQuery__
 *
 * To run a query within a React component, call `useGetStorefrontCoursesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStorefrontCoursesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStorefrontCoursesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetStorefrontCoursesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetStorefrontCoursesQuery, GetStorefrontCoursesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetStorefrontCoursesQuery, GetStorefrontCoursesQueryVariables>(GetStorefrontCoursesDocument, baseOptions);
      }
export function useGetStorefrontCoursesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetStorefrontCoursesQuery, GetStorefrontCoursesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetStorefrontCoursesQuery, GetStorefrontCoursesQueryVariables>(GetStorefrontCoursesDocument, baseOptions);
        }
export type GetStorefrontCoursesQueryHookResult = ReturnType<typeof useGetStorefrontCoursesQuery>;
export type GetStorefrontCoursesLazyQueryHookResult = ReturnType<typeof useGetStorefrontCoursesLazyQuery>;
export type GetStorefrontCoursesQueryResult = ApolloReactCommon.QueryResult<GetStorefrontCoursesQuery, GetStorefrontCoursesQueryVariables>;
export const StripeCreateOrderDocument = gql`
    mutation StripeCreateOrder($imageUrl: String!, $courseId: CourseId!, $bundleId: BundleId!, $coupon: String) {
  stripeCreateOrder(imageUrl: $imageUrl, courseId: $courseId, bundleId: $bundleId, coupon: $coupon) {
    id
  }
}
    `;
export type StripeCreateOrderMutationFn = ApolloReactCommon.MutationFunction<StripeCreateOrderMutation, StripeCreateOrderMutationVariables>;

/**
 * __useStripeCreateOrderMutation__
 *
 * To run a mutation, you first call `useStripeCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStripeCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [stripeCreateOrderMutation, { data, loading, error }] = useStripeCreateOrderMutation({
 *   variables: {
 *      imageUrl: // value for 'imageUrl'
 *      courseId: // value for 'courseId'
 *      bundleId: // value for 'bundleId'
 *      coupon: // value for 'coupon'
 *   },
 * });
 */
export function useStripeCreateOrderMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<StripeCreateOrderMutation, StripeCreateOrderMutationVariables>) {
        return ApolloReactHooks.useMutation<StripeCreateOrderMutation, StripeCreateOrderMutationVariables>(StripeCreateOrderDocument, baseOptions);
      }
export type StripeCreateOrderMutationHookResult = ReturnType<typeof useStripeCreateOrderMutation>;
export type StripeCreateOrderMutationResult = ApolloReactCommon.MutationResult<StripeCreateOrderMutation>;
export type StripeCreateOrderMutationOptions = ApolloReactCommon.BaseMutationOptions<StripeCreateOrderMutation, StripeCreateOrderMutationVariables>;
export const GetMeDocument = gql`
    query GetMe {
  me {
    uid
    email
  }
}
    `;

/**
 * __useGetMeQuery__
 *
 * To run a query within a React component, call `useGetMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
        return ApolloReactHooks.useQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, baseOptions);
      }
export function useGetMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, baseOptions);
        }
export type GetMeQueryHookResult = ReturnType<typeof useGetMeQuery>;
export type GetMeLazyQueryHookResult = ReturnType<typeof useGetMeLazyQuery>;
export type GetMeQueryResult = ApolloReactCommon.QueryResult<GetMeQuery, GetMeQueryVariables>;