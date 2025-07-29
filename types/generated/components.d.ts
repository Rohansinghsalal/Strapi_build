import type { Schema, Struct } from '@strapi/strapi';

export interface FiguredGroundEvents extends Struct.ComponentSchema {
  collectionName: 'components_figured_ground_events';
  info: {
    displayName: 'Events';
  };
  attributes: {
    Event: Schema.Attribute.String;
  };
}

export interface FiguredGroundInsightly extends Struct.ComponentSchema {
  collectionName: 'components_figured_ground_insightlies';
  info: {
    displayName: 'Insightly';
  };
  attributes: {
    Date: Schema.Attribute.Date;
    Details: Schema.Attribute.String;
    Insightly_Thumbnail: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    issue: Schema.Attribute.String;
    sequece_number: Schema.Attribute.Integer;
    URL: Schema.Attribute.String;
  };
}

export interface FiguredGroundProjectDescription
  extends Struct.ComponentSchema {
  collectionName: 'components_figured_ground_project_descriptions';
  info: {
    displayName: 'Project_Description';
  };
  attributes: {
    Project_Describtion: Schema.Attribute.RichText;
    Project_Methology: Schema.Attribute.RichText;
    Project_Outcomes: Schema.Attribute.RichText;
    Team_Member_Name: Schema.Attribute.RichText;
  };
}

export interface IdeasDetailNewsLetterIdeas extends Struct.ComponentSchema {
  collectionName: 'components_ideas_detail_news_letter_ideas';
  info: {
    displayName: 'NewsLetterIdeas';
  };
  attributes: {
    Substack_Description: Schema.Attribute.Blocks;
    Substack_ExternalLink: Schema.Attribute.String;
    Substack_ReleasedDate: Schema.Attribute.String;
    substack_title: Schema.Attribute.String;
    SubstackImagethumbnail: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Top_Stack: Schema.Attribute.Boolean;
  };
}

export interface NavrbarDetailEvents extends Struct.ComponentSchema {
  collectionName: 'components_navrbar_detail_events';
  info: {
    displayName: 'Events';
  };
  attributes: {
    new: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    text: Schema.Attribute.RichText;
  };
}

export interface NavrbarDetailInsighlry extends Struct.ComponentSchema {
  collectionName: 'components_navrbar_detail_insighlries';
  info: {
    displayName: 'Insighlry';
  };
  attributes: {
    text: Schema.Attribute.RichText;
  };
}

export interface NavrbarDetailProjectDescription
  extends Struct.ComponentSchema {
  collectionName: 'components_navrbar_detail_project_descriptions';
  info: {
    displayName: 'Project_Description';
  };
  attributes: {
    project_About: Schema.Attribute.Text;
    Project_Methodology: Schema.Attribute.RichText;
    Project_Outcomes: Schema.Attribute.RichText;
    Teams_Member_Name: Schema.Attribute.Blocks;
  };
}

export interface SubstackInfoSubstackDetails2 extends Struct.ComponentSchema {
  collectionName: 'components_substack_info_substack_details2s';
  info: {
    displayName: 'SubstackDetails2';
  };
  attributes: {
    titi: Schema.Attribute.String;
  };
}

export interface TeamsDetailTeams extends Struct.ComponentSchema {
  collectionName: 'components_teams_detail_teams';
  info: {
    displayName: 'Teams';
  };
  attributes: {
    Bio: Schema.Attribute.RichText;
    Designation: Schema.Attribute.String;
    LinkedIn_Profile: Schema.Attribute.String;
    sequence_number: Schema.Attribute.Decimal;
    Team_name: Schema.Attribute.String;
    Team_photo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface UrbanMorphologyFloorSpace extends Struct.ComponentSchema {
  collectionName: 'components_urban_morphology_floor_spaces';
  info: {
    displayName: 'FloorSpace';
  };
  attributes: {
    area: Schema.Attribute.String;
    floor: Schema.Attribute.String;
  };
}

export interface UrbanMorphologyMorphologyMetrics
  extends Struct.ComponentSchema {
  collectionName: 'components_urban_morphology_morphology_metrics';
  info: {
    displayName: 'morphology_metrics';
  };
  attributes: {
    Length_Of_Street_network: Schema.Attribute.String;
    Length_Of_Street_network_in_KM: Schema.Attribute.String;
    MapImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    MapType: Schema.Attribute.String;
    percentage: Schema.Attribute.String;
  };
}

export interface UrbanMorphologyPlanCaption extends Struct.ComponentSchema {
  collectionName: 'components_urban_morphology_plan_captions';
  info: {
    displayName: 'PlanCaption';
  };
  attributes: {
    planImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.String;
  };
}

export interface UrbanMorphologyStatalite extends Struct.ComponentSchema {
  collectionName: 'components_urban_morphology_statalites';
  info: {
    displayName: 'statalite';
  };
  attributes: {
    statliteImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    text: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'figured-ground.events': FiguredGroundEvents;
      'figured-ground.insightly': FiguredGroundInsightly;
      'figured-ground.project-description': FiguredGroundProjectDescription;
      'ideas-detail.news-letter-ideas': IdeasDetailNewsLetterIdeas;
      'navrbar-detail.events': NavrbarDetailEvents;
      'navrbar-detail.insighlry': NavrbarDetailInsighlry;
      'navrbar-detail.project-description': NavrbarDetailProjectDescription;
      'substack-info.substack-details2': SubstackInfoSubstackDetails2;
      'teams-detail.teams': TeamsDetailTeams;
      'urban-morphology.floor-space': UrbanMorphologyFloorSpace;
      'urban-morphology.morphology-metrics': UrbanMorphologyMorphologyMetrics;
      'urban-morphology.plan-caption': UrbanMorphologyPlanCaption;
      'urban-morphology.statalite': UrbanMorphologyStatalite;
    }
  }
}
