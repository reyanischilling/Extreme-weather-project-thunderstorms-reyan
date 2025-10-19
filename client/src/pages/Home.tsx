import { useRef } from "react";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";
import SectionContainer from "@/components/SectionContainer";
import InfoCard from "@/components/InfoCard";
import ImageWithCaption from "@/components/ImageWithCaption";
import WarningBadge from "@/components/WarningBadge";
import PreparednessChecklist from "@/components/PreparednessChecklist";
import TimelineItem from "@/components/TimelineItem";
import CitationCard from "@/components/CitationCard";
import AnimatedSection from "@/components/AnimatedSection";
import { Cloud, Droplets, Wind, Zap, AlertTriangle, Shield, Home as HomeIcon, History, CloudRain, Snowflake, ThermometerSun, Flame, Radio, Battery, MapPin, Users, BookOpen, CloudDrizzle, Waves } from "lucide-react";

import heroImage from '@assets/stock_images/dramatic_thunderstor_0a0b530c.jpg';
import cloudFormation from '@assets/stock_images/cumulonimbus_cloud_f_b259ccca.jpg';
import supercell from '@assets/stock_images/supercell_thundersto_c6ce4a31.jpg';
import lightning from '@assets/stock_images/lightning_strike_dan_e3fd13ef.jpg';
import hailDamage from '@assets/stock_images/hail_damage_car_wind_30567bd1.jpg';
import weatherRadar from '@assets/stock_images/weather_radar_screen_cf8b0f50.jpg';
import stormDamage from '@assets/stock_images/storm_damage_destroy_2de37f7c.jpg';
import flashFlood from '@assets/stock_images/flash_flood_rushing__b25c915e.jpg';

export default function Home() {
  const sections = [
    { id: 'formation', label: 'Formation' },
    { id: 'conditions', label: 'Conditions' },
    { id: 'dangers', label: 'Dangers' },
    { id: 'warnings', label: 'Warnings' },
    { id: 'preparedness', label: 'Preparedness' },
    { id: 'damage', label: 'Damage' },
    { id: 'history', label: 'History' },
    { id: 'sources', label: 'Sources' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const emergencyItems = [
    { id: 'radio', label: 'Battery-powered weather radio or emergency alert app' },
    { id: 'flashlight', label: 'Flashlights and extra batteries' },
    { id: 'water', label: 'Emergency water supply (1 gallon per person per day)' },
    { id: 'firstaid', label: 'First aid kit and essential medications' },
    { id: 'shelter', label: 'Identify safe shelter locations in your home' },
    { id: 'plan', label: 'Family emergency communication plan' },
  ];

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navigation sections={sections} onNavigate={scrollToSection} />

      <Hero
        title="Thunderstorms"
        subtitle="Understanding Nature's Most Powerful Atmospheric Phenomenon"
        backgroundVideo="/attached_assets/thunderstorm.mp4"
        backgroundImage={heroImage}
        onScrollClick={() => scrollToSection('formation')}
      />

      <SectionContainer
        id="formation"
        title="How Thunderstorms Form"
        subtitle="The science behind nature's electrical spectacular"
      >
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <InfoCard
              icon={ThermometerSun}
              title="Atmospheric Instability"
              description="Thunderstorms require three key ingredients: moisture, instability, and lift. When warm, moist air near the surface meets cooler air aloft, it creates an unstable atmosphere."
            />
            <InfoCard
              icon={Cloud}
              title="Convection Process"
              description="Rising warm air cools and condenses, forming towering cumulonimbus clouds that can reach heights of 12-15 km. Strong updrafts and downdrafts develop within these massive cloud structures."
            />
          </div>
        </AnimatedSection>
        <AnimatedSection delay={200}>
          <div className="grid md:grid-cols-2 gap-8">
            <ImageWithCaption
              src={cloudFormation}
              alt="Cumulonimbus cloud formation"
              caption="Towering cumulonimbus cloud developing into a thunderstorm"
            />
            <ImageWithCaption
              src={supercell}
              alt="Supercell thunderstorm"
              caption="A rotating supercell thunderstorm, the most severe type"
            />
          </div>
        </AnimatedSection>
      </SectionContainer>

      <SectionContainer
        id="conditions"
        title="Weather Conditions"
        subtitle="What thunderstorms produce and their characteristics"
        className="bg-card/30"
      >
        <AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            <InfoCard
              icon={Zap}
              title="Lightning & Thunder"
              description="Electrical discharge between cloud and ground or within clouds. Thunder is the sound wave produced by the rapid expansion of air heated by lightning to over 30,000°C."
            />
            <InfoCard
              icon={CloudRain}
              title="Heavy Precipitation"
              description="Intense rainfall rates of 25-100mm per hour are common. Slow-moving storms can produce flash flooding when rainfall accumulates faster than drainage systems can handle."
            />
            <InfoCard
              icon={Snowflake}
              title="Strong Winds & Hail"
              description="Downbursts can produce winds exceeding 150 km/h. Hail forms when ice particles are repeatedly cycled through the storm's updrafts, growing larger with each pass."
            />
          </div>
        </AnimatedSection>
      </SectionContainer>

      <SectionContainer
        id="dangers"
        title="Associated Dangers"
        subtitle="Understanding the hazards posed by thunderstorms"
      >
        <AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <InfoCard
              icon={Zap}
              title="Lightning Strikes"
              description="Can cause fatal injuries, fires, and power surges. Lightning kills more people annually than tornadoes."
            />
            <InfoCard
              icon={Waves}
              title="Flash Flooding"
              description="Rapid onset flooding is the #1 thunderstorm-related killer. Just 15cm of moving water can sweep away vehicles."
            />
            <InfoCard
              icon={Wind}
              title="Severe Wind"
              description="Downbursts and microbursts can cause extensive damage equivalent to EF0-EF1 tornadoes."
            />
            <InfoCard
              icon={Snowflake}
              title="Hail Damage"
              description="Large hail can damage crops, vehicles, and buildings. Hailstones larger than golf balls are considered severe."
            />
          </div>
        </AnimatedSection>
        <AnimatedSection delay={200}>
          <div className="grid md:grid-cols-2 gap-8">
            <ImageWithCaption
              src={lightning}
              alt="Lightning strike"
              caption="Lightning strike - a major hazard during thunderstorms"
            />
            <ImageWithCaption
              src={hailDamage}
              alt="Hail damage"
              caption="Vehicle damage caused by large hail"
            />
          </div>
        </AnimatedSection>
      </SectionContainer>

      <SectionContainer
        id="warnings"
        title="Warning Systems"
        subtitle="How meteorologists alert the public to thunderstorm threats"
        className="bg-card/30"
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <AnimatedSection>
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              <WarningBadge
                type="watch"
                label="Thunderstorm Watch"
                description="Conditions are favorable for thunderstorm development in the next 4-8 hours. Stay alert and monitor weather updates."
              />
              <WarningBadge
                type="warning"
                label="Severe Thunderstorm Warning"
                description="A severe thunderstorm has been detected by radar or reported. Winds ≥90 km/h or hail ≥2cm diameter expected."
              />
              <WarningBadge
                type="severe"
                label="Tornado Warning"
                description="A tornado has been sighted or indicated by radar. Take shelter immediately in a basement or interior room."
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={150}>
            <div className="grid md:grid-cols-2 gap-6">
              <InfoCard
                icon={Radio}
                title="Alert Levels"
                description="Weather services issue Watches when conditions are favorable and Warnings when severe weather is imminent or occurring. Warnings require immediate action."
              />
              <InfoCard
                icon={MapPin}
                title="Alert Delivery"
                description="Alerts are distributed through weather radios, emergency apps, TV/radio broadcasts, and Wireless Emergency Alerts (WEA) to mobile phones."
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <ImageWithCaption
              src={weatherRadar}
              alt="Weather radar display"
              caption="Doppler radar helps meteorologists detect and track severe thunderstorms"
            />
          </AnimatedSection>
        </div>
      </SectionContainer>

      <SectionContainer
        id="preparedness"
        title="Preparedness & Safety"
        subtitle="How to protect yourself, your family, and your community"
      >
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="font-display text-2xl font-semibold mb-6 flex items-center gap-2">
                <Battery className="w-6 h-6 text-primary" />
                Individual & Family Preparation
              </h3>
              <PreparednessChecklist
                title="Emergency Kit Essentials"
                items={emergencyItems}
              />
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold mb-6 flex items-center gap-2">
                <Shield className="w-6 h-6 text-primary" />
                Safety Guidelines
              </h3>
              <div className="space-y-4">
                <InfoCard
                  icon={HomeIcon}
                  title="Indoor Safety"
                  description="Stay away from windows, doors, and plumbing. Unplug electronics. Avoid landline phones. The safest place is an interior room on the lowest floor."
                />
                <InfoCard
                  icon={MapPin}
                  title="Outdoor Safety"
                  description="Seek shelter immediately. If no shelter is available, crouch low in a valley or ditch away from trees and metal objects. Never seek shelter under isolated trees."
                />
              </div>
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={200}>
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
            <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-400" />
              Lightning Safety Rule: 30-30
            </h4>
            <p className="text-muted-foreground">
              When you see lightning, count to 30. If you hear thunder before reaching 30, seek shelter immediately. 
              Wait 30 minutes after the last thunder before resuming outdoor activities.
            </p>
          </div>
        </AnimatedSection>
      </SectionContainer>

      <SectionContainer
        id="damage"
        title="Potential Damage"
        subtitle="Understanding the destructive power of severe thunderstorms"
        className="bg-card/30"
      >
        <AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <InfoCard
              icon={HomeIcon}
              title="Property Damage"
              description="High winds can tear off roofs, break windows, and topple trees. Hail can destroy crops and damage roofing, siding, and vehicles. Estimated billions in annual damages."
            />
            <InfoCard
              icon={Waves}
              title="Flood Damage"
              description="Flash flooding can wash out roads, bridges, and foundations. Water damage to homes and businesses can be extensive and costly to repair."
            />
            <InfoCard
              icon={Flame}
              title="Infrastructure Impact"
              description="Lightning strikes cause power outages affecting thousands. Downed power lines create safety hazards. Communication systems may be disrupted."
            />
          </div>
        </AnimatedSection>
        <AnimatedSection delay={200}>
          <div className="grid md:grid-cols-2 gap-8">
            <ImageWithCaption
              src={stormDamage}
              alt="Storm damage to building"
              caption="Severe structural damage caused by thunderstorm winds"
            />
            <ImageWithCaption
              src={flashFlood}
              alt="Flash flooding"
              caption="Flash flooding from intense thunderstorm rainfall"
            />
          </div>
        </AnimatedSection>
      </SectionContainer>

      <SectionContainer
        id="history"
        title="Local History"
        subtitle="Significant thunderstorm events in our region"
      >
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <TimelineItem
              year="2011"
              title="Record Hail Event"
              description="A supercell thunderstorm produced tennis ball-sized hail across the region, causing over $200 million in property damage. Thousands of vehicles and homes were damaged in the most costly hail event in local history."
            />
            <TimelineItem
              year="2016"
              title="Derecho Wind Storm"
              description="A fast-moving line of severe thunderstorms (derecho) produced widespread wind damage with gusts exceeding 130 km/h. Over 100,000 customers lost power, some for several days."
            />
            <TimelineItem
              year="2018"
              title="Flash Flood Crisis"
              description="Slow-moving thunderstorms dropped 180mm of rain in 4 hours, causing catastrophic flash flooding. Emergency services conducted over 200 water rescues. Several neighborhoods were evacuated."
            />
            <TimelineItem
              year="2023"
              title="Summer Severe Weather Outbreak"
              description="A multi-day severe weather outbreak produced numerous severe thunderstorms with large hail, damaging winds, and several tornado warnings. The event highlighted the importance of preparedness and weather awareness."
              isLast
            />
          </div>
        </AnimatedSection>
      </SectionContainer>

      <SectionContainer
        id="sources"
        title="Research Sources"
        subtitle="References and citations used in this project"
        className="bg-card/30"
      >
        <AnimatedSection>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
            <CitationCard
              number={1}
              title="Severe Weather 101: Thunderstorm Basics"
              author="National Severe Storms Laboratory"
              source="NOAA"
              url="https://www.nssl.noaa.gov"
            />
            <CitationCard
              number={2}
              title="Thunderstorms, Tornadoes, Lightning"
              author="Environment and Climate Change Canada"
              source="Government of Canada"
              url="https://www.canada.ca/en/environment-climate-change.html"
            />
            <CitationCard
              number={3}
              title="Lightning Safety Tips and Resources"
              author="National Weather Service"
              source="NOAA Weather Service"
              url="https://www.weather.gov/safety/lightning"
            />
            <CitationCard
              number={4}
              title="Flash Flood Safety"
              author="Ready.gov"
              source="U.S. Department of Homeland Security"
              url="https://www.ready.gov/floods"
            />
            <CitationCard
              number={5}
              title="Understanding Weather Warnings"
              author="Storm Prediction Center"
              source="National Weather Service"
              url="https://www.spc.noaa.gov"
            />
            <CitationCard
              number={6}
              title="Atmospheric Convection and Severe Weather"
              author="Dr. Charles Doswell III"
              source="Journal of Meteorological Research, Vol. 28(4)"
            />
          </div>
        </AnimatedSection>
      </SectionContainer>

      <footer className="bg-card border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            Extreme Weather Project © 2024 | Educational Resource on Thunderstorms
          </p>
        </div>
      </footer>
    </div>
  );
}
