import { gql } from 'graphql-request';

export const GRAPHQL_FRAMENTS = gql`
  ## FRAGMENTS
  fragment _image on UploadFileEntityResponse{
    data{
      id
      attributes{
        alternativeText
        url
      }
    }
  }

  fragment _tagsPost on TagRelationResponseCollection{
    data{id
      attributes{
        displayName
        slug
      }
    }
  }

  fragment _author on AuthorEntityResponse{
    data{
      id
      attributes{
        displayName
        slug
      }
    }
  }

  fragment _categoriesPost on CatergoryRelationResponseCollection{
      data{
      id
      attributes{
        displayName
        slug
      }
    }
  }

  fragment _posts on PostEntityResponseCollection{
      data{
        id
        attributes{
          title
          slug
          exercpt
          cover{
            ..._image
          }
          author{
            ..._author
          }
          allowCommnets
          catergories{
            ..._categoriesPost
          }
          tags{
            ..._tagsPost
          }
          createdAt
          publishedAt
        }
      }
  }

  fragment _menuLink on ComponentMenuMenuLink{
    id
    link
    text
    newTab
  }

  fragment _setting on SettingEntityResponse{
    data{
      attributes{
        blogName
        blogDescription
        logo {
          ..._image
        }
        footer: text
        menuLink{
          ..._menuLink
        }
      }
    }
  }
`;
