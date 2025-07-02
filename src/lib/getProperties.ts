import { supabase } from './supabase';
import { PropertyData } from '@/types/special';

function mapPropertyFromSupabase(data: any): PropertyData {
  return {
    name: data.name,
    code: data.code,
    tagline: data.tagline,
    location: data.location,
    summary: {
      details: data.summary_details,
      parking: data.summary_parking,
    },
    images: data.images,
    about: {
      description: data.about_description,
      highlights: data.about_highlights,
    },
    characteristics: data.characteristics,
    neighborhoodDifferentials: data.neighborhood_differentials,
    walkDistanceStats: data.walk_distance_stats,
    contact: {
      whatsappNumber: data.contact_whatsapp_number,
      formId: data.contact_form_id,
    },
  };
}

export async function getProperties() {
  const { data, error } = await supabase.from('properties').select('*');
  if (error) throw error;
  return data ? data.map(mapPropertyFromSupabase) : [];
}

export async function getPropertyByCode(code: string) {
  const { data, error } = await supabase
    .from('properties')
    .select('*')
    .eq('code', code)
    .single();
  if (error) throw error;
  return data ? mapPropertyFromSupabase(data) : null;
} 