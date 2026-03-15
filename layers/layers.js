var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 0.969000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_HawaiiCoastline_1 = new ol.format.GeoJSON();
var features_HawaiiCoastline_1 = format_HawaiiCoastline_1.readFeatures(json_HawaiiCoastline_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HawaiiCoastline_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HawaiiCoastline_1.addFeatures(features_HawaiiCoastline_1);
var lyr_HawaiiCoastline_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HawaiiCoastline_1, 
                style: style_HawaiiCoastline_1,
                popuplayertitle: 'Hawaiʻi Coastline',
                interactive: false,
                title: '<img src="styles/legend/HawaiiCoastline_1.png" /> Hawaiʻi Coastline'
            });
var lyr_ObservationDensityKernelDensityEstimationHeatmap_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Observation Density (Kernel Density Estimation Heatmap)<br />\
    <img src="styles/legend/ObservationDensityKernelDensityEstimationHeatmap_2_0.png" /> Very Low Observation Density<br />\
    <img src="styles/legend/ObservationDensityKernelDensityEstimationHeatmap_2_1.png" /> Low Observation Density<br />\
    <img src="styles/legend/ObservationDensityKernelDensityEstimationHeatmap_2_2.png" /> Moderate Observation Density<br />\
    <img src="styles/legend/ObservationDensityKernelDensityEstimationHeatmap_2_3.png" /> High Observation Density<br />\
    <img src="styles/legend/ObservationDensityKernelDensityEstimationHeatmap_2_4.png" /> Observation Hotspot<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ObservationDensityKernelDensityEstimationHeatmap_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-17826532.267434, 2163353.211311, -17225725.735969, 2536646.978953]
        })
    });
var format_SpeciesRichnessHexGrid_3 = new ol.format.GeoJSON();
var features_SpeciesRichnessHexGrid_3 = format_SpeciesRichnessHexGrid_3.readFeatures(json_SpeciesRichnessHexGrid_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SpeciesRichnessHexGrid_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SpeciesRichnessHexGrid_3.addFeatures(features_SpeciesRichnessHexGrid_3);
var lyr_SpeciesRichnessHexGrid_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SpeciesRichnessHexGrid_3, 
                style: style_SpeciesRichnessHexGrid_3,
                popuplayertitle: 'Species Richness (Hex Grid)',
                interactive: true,
    title: 'Species Richness (Hex Grid)<br />\
    <img src="styles/legend/SpeciesRichnessHexGrid_3_0.png" /> Very Low Richness (0 - 4 species)<br />\
    <img src="styles/legend/SpeciesRichnessHexGrid_3_1.png" /> Low Richness (5 - 19 species)<br />\
    <img src="styles/legend/SpeciesRichnessHexGrid_3_2.png" /> Moderate Richness (20 - 34 species)<br />\
    <img src="styles/legend/SpeciesRichnessHexGrid_3_3.png" /> High Richness (35 - 66 species)<br />\
    <img src="styles/legend/SpeciesRichnessHexGrid_3_4.png" /> Biodiversity Hotspot ( ≥67 species)<br />' });
var format_IndividualSpeciesObservations_4 = new ol.format.GeoJSON();
var features_IndividualSpeciesObservations_4 = format_IndividualSpeciesObservations_4.readFeatures(json_IndividualSpeciesObservations_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndividualSpeciesObservations_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndividualSpeciesObservations_4.addFeatures(features_IndividualSpeciesObservations_4);
var lyr_IndividualSpeciesObservations_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IndividualSpeciesObservations_4, 
                style: style_IndividualSpeciesObservations_4,
                popuplayertitle: 'Individual Species Observations',
                interactive: true,
    title: 'Individual Species Observations<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_0.png" /> Abbott\'s moray<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_1.png" /> African Giant Snail<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_2.png" /> Ambon Toby<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_3.png" /> Ashy Sea Cucumber<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_4.png" /> Banded Coral Shrimp<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_5.png" /> Banded Sea Urchin<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_6.png" /> Barred Tidepool Goby<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_7.png" /> Beautiful Platydoris<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_8.png" /> Belted Wrasse<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_9.png" /> Bigfin Reef Squid<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_10.png" /> Bird Wrasse<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_11.png" /> Black Doris<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_12.png" /> Black purse shell<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_13.png" /> Black Triggerfish<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_14.png" /> Black-and-white Cone Snail<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_15.png" /> Black-foot \'Opihi<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_16.png" /> Blackfin Chromis<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_17.png" /> Blackspot Sergeant<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_18.png" /> Blacktail Snapper<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_19.png" /> Blood-stained frog shell<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_20.png" /> Bloody Pebble Crab<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_21.png" /> Blue Octocoral<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_22.png" /> Blue Tube Sponge<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_23.png" /> Blue-black Urchin<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_24.png" /> Blue-spotted Cornetfish<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_25.png" /> Bluespine Unicornfish<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_26.png" /> Blunt-end Seahare<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_27.png" /> Branched wing weed<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_28.png" /> Brighteye Damselfish<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_29.png" /> Broadleaf Sea Lettuce<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_30.png" /> Brown Purse Shell<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_31.png" /> Bullethead Blenny<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_32.png" /> Calf Cowry<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_33.png" /> Cat Cone<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_34.png" /> Cauliflower Coral<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_35.png" /> Christmas Tree Hydroid<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_36.png" /> Christmas Tree Worms<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_37.png" /> Christmas Wrasse<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_38.png" /> Cocos Frillgoby<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_39.png" /> Collector Urchin<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_40.png" /> Colonial Anemone<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_41.png" /> common hairy crab<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_42.png" /> Common Mantis Shrimp<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_43.png" /> Convex Crab<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_44.png" /> Copper-bellied Ant<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_45.png" /> Corrugated Liomera<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_46.png" /> Crenulated Auger<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_47.png" /> Devil Scorpionfish<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_48.png" /> Difficult Sea Cucumber<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_49.png" /> Divine Dwarf Goby<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_50.png" /> Dotted Periwinkle<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_51.png" /> Double-edge Sargassum<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_52.png" /> Dusky Surgeonfish<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_53.png" /> Dwarf Pacific Planaxis<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_54.png" /> Estuarine Rock Crab<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_55.png" /> False \'Opihi<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_56.png" /> Feather Caulerpa<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_57.png" /> Feeble Shrimp<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_58.png" /> Flat Rock Crab<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_59.png" /> Flexuous Gutweed<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_60.png" /> Forceps Butterflyfish<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_61.png" /> Freckled Hawkfish<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_62.png" /> Fringed Cowry<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_63.png" /> Gold-Mouthed Triton Snail<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_64.png" /> Goldring Surgeonfish<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_65.png" /> Goose Barnacle<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_66.png" /> Gorilla ogo<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_67.png" /> Granulated Drupe<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_68.png" /> Grape Drupe<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_69.png" /> Great Barracuda<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_70.png" /> green bubble seaweed<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_71.png" /> Green Button Polyp<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_72.png" /> Green Feather Alga<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_73.png" /> Green Sea Turtle<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_74.png" /> Guam Hermit Crab<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_75.png" /> Gutweed<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_76.png" /> Hairy Elbow Crab<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_77.png" /> Hairy-fingered Rock Crab<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_78.png" /> hard bubble seaweed<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_79.png" /> Harlequin Snake Eel<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_80.png" /> Hawaiian Black Nerite<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_81.png" /> Hawaiian Convict Surgeonfish<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_82.png" /> Hawaiian Flagtail<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_83.png" /> Hawaiian Gregory<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_84.png" /> Hawaiian Islands silverside<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_85.png" /> Hawaiian Leviathan Cowry<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_86.png" /> Hawaiian Mussel<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_87.png" /> Hawaiian Mustache Conger<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_88.png" /> Hawaiian Snakehead Cowrie<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_89.png" /> Hawaiian Spotted Nerite<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_90.png" /> Hawaiian Spotted Toby<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_91.png" /> Hawaiian Top Snail<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_92.png" /> Hawaiian Turbo Snail<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_93.png" /> Hawaiian Warty Slug<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_94.png" /> Hembel\'s Rock Barnacle<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_95.png" /> Hidden Hermit Crab<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_96.png" /> Highfin Chub<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_97.png" /> Honey Cowry<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_98.png" /> Horned Ghost Crab<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_99.png" /> Humpback Cowry<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_100.png" /> Indian Feather Duster Worm<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_101.png" /> Indo-Pacific Man-O-War<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_102.png" /> Indo-Pacific Rock-boring Urchin<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_103.png" /> Indo-Pacific Sergeant Major<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_104.png" /> intermediate hairy triton<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_105.png" /> Intermediate Thais<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_106.png" /> Iridescent Seaweed<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_107.png" /> Isabella Cowry<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_108.png" /> Jeweled Anemone Hermit Crab<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_109.png" /> Knobbed Spindle<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_110.png" /> Knobbly Zoanthid<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_111.png" /> Lace Coral<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_112.png" /> Lagoon Triggerfish<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_113.png" /> Laminated Ark<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_114.png" /> leather mudweed<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_115.png" /> Left-handed Hermit Crab<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_116.png" /> Lei Triggerfish<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_117.png" /> Lettered Mitre<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_118.png" /> Light-spotted Sea Cucumber<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_119.png" /> limu \'aki\'aki<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_120.png" /> Lined Fireworm<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_121.png" /> Lined Seahare<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_122.png" /> Livid Cone<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_123.png" /> Lollyfish Sea Cucumber<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_124.png" /> Long-tarsus Sally-Lightfoot<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_125.png" /> Manybar Goatfish<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_126.png" /> Marbled Shrimp<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_127.png" /> Marriage Cone<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_128.png" /> Mile Cone<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_129.png" /> Money Cowry<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_130.png" /> money plant<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_131.png" /> Moorish Idol<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_132.png" /> Mulberry Drupe<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_133.png" /> Nanus Cone<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_134.png" /> Needle-tooth Moray<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_135.png" /> Oblong Sea Urchin<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_136.png" /> Obscure Cone<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_137.png" /> Orange Fire Worm<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_138.png" /> Orange Gumdrop<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_139.png" /> Orangeblotch Surgeonfish<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_140.png" /> Ornate Turbanweed<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_141.png" /> Oyster thief<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_142.png" /> Pacific Bullethead Parrotfish<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_143.png" /> Pacific Orange-spine Unicornfish<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_144.png" /> Pacific Oyster<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_145.png" /> Pacific Trumpetfish<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_146.png" /> Pacific White-spotted Sea Cucumber<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_147.png" /> Painted Hermit Crab<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_148.png" /> Painted Hypselodoris<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_149.png" /> Pale Anemone<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_150.png" /> Pale Anemone Hermit Crab<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_151.png" /> Pallid Ghost Crab<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_152.png" /> Partridge Tun Snail<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_153.png" /> Peacock Grouper<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_154.png" /> Peppered Moray<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_155.png" /> Pied Brittle Star<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_156.png" /> Pimpled Basket Sea Snail<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_157.png" /> Pink Bubble Snail<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_158.png" /> Pipiwai<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_159.png" /> Plate & Pillar Coral<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_160.png" /> Pleated Nerite<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_161.png" /> Pleated Rock Crab<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_162.png" /> Polished Nerite<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_163.png" /> prickly seaweed<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_164.png" /> Prickly Spotted Drupe<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_165.png" /> Purple Rock Barnacle<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_166.png" /> Raccoon Butterflyfish<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_167.png" /> Rat Cone<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_168.png" /> Rayed Pearl Oyster<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_169.png" /> red mangrove<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_170.png" /> Red Pencil Urchin<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_171.png" /> Red Porcelain Crab<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_172.png" /> red sea plume<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_173.png" /> Red-eyed Xanthid Crab<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_174.png" /> Red-rimmed Melania<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_175.png" /> Redbarred Hawkfish<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_176.png" /> Redlip Parrotfish<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_177.png" /> Related Miter<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_178.png" /> Reticulated Cowry<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_179.png" /> Reticulated Flagtail<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_180.png" /> Reticulated Venus<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_181.png" /> Revi Hermit Crab<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_182.png" /> Ringed Sap-sucking Slug<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_183.png" /> Rough Box Crab<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_184.png" /> rough ridged tellin<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_185.png" /> Rough-spined Urchin<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_186.png" /> Ruby-belted Turban<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_187.png" /> Saddle Wrasse<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_188.png" /> Savigny\'s Longspine Sea Urchin<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_189.png" /> Scaly Rock Crab<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_190.png" /> Sea Grapes<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_191.png" /> Sea Mat<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_192.png" /> sea purslane<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_193.png" /> Sea Swallow<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_194.png" /> Seaweed Blenny<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_195.png" /> Seurat\'s Hermit Crab<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_196.png" /> Sharpnose Mullet<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_197.png" /> Sheriff-badge Sea Star<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_198.png" /> Shingle Urchin<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_199.png" /> Shingly Hoof Snail<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_200.png" /> Snowball Chama<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_201.png" /> Snowflake Moray<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_202.png" /> Speckled Scorpionfish<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_203.png" /> Speckled Squirrelfish<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_204.png" /> Spotted Boxfish<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_205.png" /> Spotted Reef Crab<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_206.png" /> Spotted Sand Shell<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_207.png" /> Spotted Swallowtail Slug<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_208.png" /> Stiff Sea Cucumber<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_209.png" /> Striped Barnacle<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_210.png" /> Striped Mullet<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_211.png" /> Stubborn Sea Cucumber<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_212.png" /> Surge Wrasse<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_213.png" /> Swallowtail Headshield Slug<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_214.png" /> Teddy Bear Crab<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_215.png" /> Thin-shelled Rock Crab<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_216.png" /> Tiny Rock Crab<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_217.png" /> Tooth Caulerpa<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_218.png" /> Variable Worm Snail<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_219.png" /> Variegated Lizardfish<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_220.png" /> Vermiculate Cone<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_221.png" /> Violet Snails<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_222.png" /> Violet Zoanthids<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_223.png" /> Wandering Tattler<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_224.png" /> Warty Seacat<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_225.png" /> warty turban<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_226.png" /> Wedgetail Triggerfish<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_227.png" /> White Dot-eyed Hermit Crab<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_228.png" /> White Scroll Alga<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_229.png" /> White-speckled Seahare<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_230.png" /> White-spotted Hermit Crab<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_231.png" /> Whitebar Surgeonfish<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_232.png" /> Whitespotted Frillgoby<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_233.png" /> Yellow-foot \'Opihi<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_234.png" /> Yellow-headed Moray<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_235.png" /> Yellow-legged Mud-dauber Wasp<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_236.png" /> Yellow-margined Spanish Dancer<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_237.png" /> Yellowmargin Moray<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_238.png" /> Yellowmouth Spindle<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_239.png" /> Yellowstripe Goatfish<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_240.png" /> Zebra Blenny<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_241.png" /> Zebra Hermit Crab<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_242.png" /> Zebra Moray<br />\
    <img src="styles/legend/IndividualSpeciesObservations_4_243.png" /> <br />' });
var format_BacteriaEnterococcusMPN100mL_5 = new ol.format.GeoJSON();
var features_BacteriaEnterococcusMPN100mL_5 = format_BacteriaEnterococcusMPN100mL_5.readFeatures(json_BacteriaEnterococcusMPN100mL_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BacteriaEnterococcusMPN100mL_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BacteriaEnterococcusMPN100mL_5.addFeatures(features_BacteriaEnterococcusMPN100mL_5);
var lyr_BacteriaEnterococcusMPN100mL_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BacteriaEnterococcusMPN100mL_5, 
                style: style_BacteriaEnterococcusMPN100mL_5,
                popuplayertitle: 'Bacteria (Enterococcus MPN/100 mL)',
                interactive: true,
    title: 'Bacteria (Enterococcus MPN/100 mL)<br />\
    <img src="styles/legend/BacteriaEnterococcusMPN100mL_5_0.png" /> Low Bacteria (0 - 35)<br />\
    <img src="styles/legend/BacteriaEnterococcusMPN100mL_5_1.png" /> Medium Bacteria (36 - 130)<br />\
    <img src="styles/legend/BacteriaEnterococcusMPN100mL_5_2.png" /> High Bacteria (≥131)<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_HawaiiCoastline_1.setVisible(true);lyr_ObservationDensityKernelDensityEstimationHeatmap_2.setVisible(true);lyr_SpeciesRichnessHexGrid_3.setVisible(true);lyr_IndividualSpeciesObservations_4.setVisible(true);lyr_BacteriaEnterococcusMPN100mL_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_HawaiiCoastline_1,lyr_ObservationDensityKernelDensityEstimationHeatmap_2,lyr_SpeciesRichnessHexGrid_3,lyr_IndividualSpeciesObservations_4,lyr_BacteriaEnterococcusMPN100mL_5];
lyr_HawaiiCoastline_1.set('fieldAliases', {'fid': 'fid', 'featurecla': 'featurecla', 'scalerank': 'scalerank', 'min_zoom': 'min_zoom', });
lyr_SpeciesRichnessHexGrid_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'row_index': 'row_index', 'col_index': 'col_index', 'scientific_name_unique': 'scientific_name_unique', });
lyr_IndividualSpeciesObservations_4.set('fieldAliases', {'id': 'id', 'uuid': 'uuid', 'observed_on_string': 'observed_on_string', 'observed_on': 'observed_on', 'time_observed_at': 'time_observed_at', 'user_id': 'user_id', 'user_name': 'user_name', 'created_at': 'created_at', 'license': 'license', 'url': 'url', 'image_url': 'image_url', 'place_guess': 'place_guess', 'latitude': 'latitude', 'longitude': 'longitude', 'positional_accuracy': 'positional_accuracy', 'private_place_guess': 'private_place_guess', 'private_latitude': 'private_latitude', 'private_longitude': 'private_longitude', 'public_positional_accuracy': 'public_positional_accuracy', 'geoprivacy': 'geoprivacy', 'taxon_geoprivacy': 'taxon_geoprivacy', 'coordinates_obscured': 'coordinates_obscured', 'positioning_method': 'positioning_method', 'positioning_device': 'positioning_device', 'scientific_name': 'scientific_name', 'common_name': 'common_name', 'iconic_taxon_name': 'iconic_taxon_name', 'taxon_id': 'taxon_id', });
lyr_BacteriaEnterococcusMPN100mL_5.set('fieldAliases', {'sample id': 'sample id', 'data entry author': 'data entry author', 'state': 'state', 'lab id': 'lab id', 'lab name': 'lab name', 'collection date': 'collection date', 'collection time (Pacific/Honolulu)': 'collection time (Pacific/Honolulu)', 'stored collectionTime': 'stored collectionTime', 'tested by': 'tested by', 'site id': 'site id', 'site name': 'site name', 'latitude': 'latitude', 'longitude': 'longitude', 'water temperature (f)': 'water temperature (f)', 'air temperature (f)': 'air temperature (f)', 'current weather': 'current weather', 'recent precipitation': 'recent precipitation', 'tide': 'tide', 'wave height': 'wave height', 'wind speed (mph)': 'wind speed (mph)', 'wind direction': 'wind direction', 'Enterococcus modifier': 'Enterococcus modifier', 'Enterococcus (mpn/100mL)': 'Enterococcus (mpn/100mL)', 'Ecoli modifier': 'Ecoli modifier', 'Ecoli (mpn/100mL)': 'Ecoli (mpn/100mL)', 'Total Coliform modifier': 'Total Coliform modifier', 'Total Coliform (mpn/100mL)': 'Total Coliform (mpn/100mL)', 'comments': 'comments', 'pH': 'pH', 'Salinity (PSU)': 'Salinity (PSU)', 'Turbidity (NTU)': 'Turbidity (NTU)', 'Ammonia/NH3 (ppm)': 'Ammonia/NH3 (ppm)', 'Nitrates/NO3 (mg/L)': 'Nitrates/NO3 (mg/L)', 'Nitrites/NO2 (mg/L)': 'Nitrites/NO2 (mg/L)', 'Nitrogen(NO3+NO2) (mg/L)': 'Nitrogen(NO3+NO2) (mg/L)', 'Phosphate (mg/L)': 'Phosphate (mg/L)', 'Dissolved Oxygen (mg/L)': 'Dissolved Oxygen (mg/L)', 'publication time': 'publication time', });
lyr_HawaiiCoastline_1.set('fieldImages', {'fid': 'TextEdit', 'featurecla': 'TextEdit', 'scalerank': 'TextEdit', 'min_zoom': 'TextEdit', });
lyr_SpeciesRichnessHexGrid_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'row_index': 'TextEdit', 'col_index': 'TextEdit', 'scientific_name_unique': 'TextEdit', });
lyr_IndividualSpeciesObservations_4.set('fieldImages', {'id': 'Range', 'uuid': 'TextEdit', 'observed_on_string': 'TextEdit', 'observed_on': 'DateTime', 'time_observed_at': 'DateTime', 'user_id': 'Range', 'user_name': 'TextEdit', 'created_at': 'DateTime', 'license': 'TextEdit', 'url': 'TextEdit', 'image_url': 'TextEdit', 'place_guess': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'positional_accuracy': 'Range', 'private_place_guess': 'TextEdit', 'private_latitude': 'TextEdit', 'private_longitude': 'TextEdit', 'public_positional_accuracy': 'Range', 'geoprivacy': 'TextEdit', 'taxon_geoprivacy': 'TextEdit', 'coordinates_obscured': 'CheckBox', 'positioning_method': 'TextEdit', 'positioning_device': 'TextEdit', 'scientific_name': 'TextEdit', 'common_name': 'TextEdit', 'iconic_taxon_name': 'TextEdit', 'taxon_id': 'Range', });
lyr_BacteriaEnterococcusMPN100mL_5.set('fieldImages', {'sample id': 'TextEdit', 'data entry author': 'TextEdit', 'state': 'TextEdit', 'lab id': 'Range', 'lab name': 'TextEdit', 'collection date': 'TextEdit', 'collection time (Pacific/Honolulu)': 'TextEdit', 'stored collectionTime': 'DateTime', 'tested by': 'TextEdit', 'site id': 'Range', 'site name': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'water temperature (f)': 'TextEdit', 'air temperature (f)': 'TextEdit', 'current weather': 'TextEdit', 'recent precipitation': 'CheckBox', 'tide': 'TextEdit', 'wave height': 'TextEdit', 'wind speed (mph)': 'TextEdit', 'wind direction': 'TextEdit', 'Enterococcus modifier': 'TextEdit', 'Enterococcus (mpn/100mL)': 'TextEdit', 'Ecoli modifier': 'TextEdit', 'Ecoli (mpn/100mL)': 'Range', 'Total Coliform modifier': 'TextEdit', 'Total Coliform (mpn/100mL)': 'Range', 'comments': 'TextEdit', 'pH': 'TextEdit', 'Salinity (PSU)': 'TextEdit', 'Turbidity (NTU)': 'TextEdit', 'Ammonia/NH3 (ppm)': 'TextEdit', 'Nitrates/NO3 (mg/L)': 'TextEdit', 'Nitrites/NO2 (mg/L)': 'TextEdit', 'Nitrogen(NO3+NO2) (mg/L)': 'TextEdit', 'Phosphate (mg/L)': 'TextEdit', 'Dissolved Oxygen (mg/L)': 'TextEdit', 'publication time': 'DateTime', });
lyr_HawaiiCoastline_1.set('fieldLabels', {'fid': 'no label', 'featurecla': 'no label', 'scalerank': 'no label', 'min_zoom': 'no label', });
lyr_SpeciesRichnessHexGrid_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'row_index': 'no label', 'col_index': 'no label', 'scientific_name_unique': 'no label', });
lyr_IndividualSpeciesObservations_4.set('fieldLabels', {'id': 'no label', 'uuid': 'no label', 'observed_on_string': 'no label', 'observed_on': 'no label', 'time_observed_at': 'no label', 'user_id': 'no label', 'user_name': 'no label', 'created_at': 'no label', 'license': 'no label', 'url': 'no label', 'image_url': 'no label', 'place_guess': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'positional_accuracy': 'no label', 'private_place_guess': 'no label', 'private_latitude': 'no label', 'private_longitude': 'no label', 'public_positional_accuracy': 'no label', 'geoprivacy': 'no label', 'taxon_geoprivacy': 'no label', 'coordinates_obscured': 'no label', 'positioning_method': 'no label', 'positioning_device': 'no label', 'scientific_name': 'no label', 'common_name': 'no label', 'iconic_taxon_name': 'no label', 'taxon_id': 'no label', });
lyr_BacteriaEnterococcusMPN100mL_5.set('fieldLabels', {'sample id': 'no label', 'data entry author': 'no label', 'state': 'no label', 'lab id': 'no label', 'lab name': 'no label', 'collection date': 'no label', 'collection time (Pacific/Honolulu)': 'no label', 'stored collectionTime': 'no label', 'tested by': 'no label', 'site id': 'no label', 'site name': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'water temperature (f)': 'no label', 'air temperature (f)': 'no label', 'current weather': 'no label', 'recent precipitation': 'no label', 'tide': 'no label', 'wave height': 'no label', 'wind speed (mph)': 'no label', 'wind direction': 'no label', 'Enterococcus modifier': 'no label', 'Enterococcus (mpn/100mL)': 'no label', 'Ecoli modifier': 'no label', 'Ecoli (mpn/100mL)': 'no label', 'Total Coliform modifier': 'no label', 'Total Coliform (mpn/100mL)': 'no label', 'comments': 'no label', 'pH': 'no label', 'Salinity (PSU)': 'no label', 'Turbidity (NTU)': 'no label', 'Ammonia/NH3 (ppm)': 'no label', 'Nitrates/NO3 (mg/L)': 'no label', 'Nitrites/NO2 (mg/L)': 'no label', 'Nitrogen(NO3+NO2) (mg/L)': 'no label', 'Phosphate (mg/L)': 'no label', 'Dissolved Oxygen (mg/L)': 'no label', 'publication time': 'no label', });
lyr_BacteriaEnterococcusMPN100mL_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});