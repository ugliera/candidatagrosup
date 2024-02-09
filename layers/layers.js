var wms_layers = [];

var format_deptbdcr76_0 = new ol.format.GeoJSON();
var features_deptbdcr76_0 = format_deptbdcr76_0.readFeatures(json_deptbdcr76_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_deptbdcr76_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_deptbdcr76_0.addFeatures(features_deptbdcr76_0);
var lyr_deptbdcr76_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_deptbdcr76_0, 
                style: style_deptbdcr76_0,
                interactive: true,
                title: '<img src="styles/legend/deptbdcr76_0.png" /> dept bdc r76 '
            });
var format_deptbdcr75_1 = new ol.format.GeoJSON();
var features_deptbdcr75_1 = format_deptbdcr75_1.readFeatures(json_deptbdcr75_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_deptbdcr75_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_deptbdcr75_1.addFeatures(features_deptbdcr75_1);
var lyr_deptbdcr75_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_deptbdcr75_1, 
                style: style_deptbdcr75_1,
                interactive: true,
                title: '<img src="styles/legend/deptbdcr75_1.png" /> dept bdc r75 '
            });
var format_fichiercompletavecUAInom_2 = new ol.format.GeoJSON();
var features_fichiercompletavecUAInom_2 = format_fichiercompletavecUAInom_2.readFeatures(json_fichiercompletavecUAInom_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fichiercompletavecUAInom_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fichiercompletavecUAInom_2.addFeatures(features_fichiercompletavecUAInom_2);
var lyr_fichiercompletavecUAInom_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_fichiercompletavecUAInom_2, 
                style: style_fichiercompletavecUAInom_2,
                interactive: true,
                title: '<img src="styles/legend/fichiercompletavecUAInom_2.png" /> fichier complet avec UAI & nom'
            });
var format_agrosupdijon2024isoles_3 = new ol.format.GeoJSON();
var features_agrosupdijon2024isoles_3 = format_agrosupdijon2024isoles_3.readFeatures(json_agrosupdijon2024isoles_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_agrosupdijon2024isoles_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_agrosupdijon2024isoles_3.addFeatures(features_agrosupdijon2024isoles_3);
var lyr_agrosupdijon2024isoles_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_agrosupdijon2024isoles_3, 
                style: style_agrosupdijon2024isoles_3,
                interactive: true,
                title: '<img src="styles/legend/agrosupdijon2024isoles_3.png" /> agrosup dijon2024 isoles'
            });

lyr_deptbdcr76_0.setVisible(true);lyr_deptbdcr75_1.setVisible(true);lyr_fichiercompletavecUAInom_2.setVisible(true);lyr_agrosupdijon2024isoles_3.setVisible(true);
var layersList = [lyr_deptbdcr76_0,lyr_deptbdcr75_1,lyr_fichiercompletavecUAInom_2,lyr_agrosupdijon2024isoles_3];
lyr_deptbdcr76_0.set('fieldAliases', {'NOM_DEP': 'NOM_DEP', 'INSEE_DEP': 'INSEE_DEP', 'x': 'x', 'y': 'y', });
lyr_deptbdcr75_1.set('fieldAliases', {'NOM_DEP': 'NOM_DEP', 'INSEE_DEP': 'INSEE_DEP', 'x': 'x', 'y': 'y', });
lyr_fichiercompletavecUAInom_2.set('fieldAliases', {'NOM': 'NOM', 'UAI_ETBLT': 'UAI_ETBLT', });
lyr_agrosupdijon2024isoles_3.set('fieldAliases', {'ID': 'ID', 'STATUT': 'STATUT', 'INSEE_COM': 'INSEE_COM', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'CODE_EPCI': 'CODE_EPCI', 'NOM_COM_M': 'NOM_COM_M', 'POPULATION': 'POPULATION', 'TYPE': 'TYPE', 'NOM_COM': 'NOM_COM', 'X': 'X', 'Y': 'Y', 'NOM': 'NOM', 'PRENOM': 'PRENOM', 'EXAMEN': 'EXAMEN', 'CP': 'CP', });
lyr_deptbdcr76_0.set('fieldImages', {'NOM_DEP': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'x': '', 'y': '', });
lyr_deptbdcr75_1.set('fieldImages', {'NOM_DEP': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_fichiercompletavecUAInom_2.set('fieldImages', {'NOM': 'TextEdit', 'UAI_ETBLT': 'TextEdit', });
lyr_agrosupdijon2024isoles_3.set('fieldImages', {'ID': 'TextEdit', 'STATUT': 'TextEdit', 'INSEE_COM': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'CODE_EPCI': 'TextEdit', 'NOM_COM_M': 'TextEdit', 'POPULATION': 'TextEdit', 'TYPE': 'TextEdit', 'NOM_COM': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'NOM': 'TextEdit', 'PRENOM': 'TextEdit', 'EXAMEN': 'TextEdit', 'CP': 'TextEdit', });
lyr_deptbdcr76_0.set('fieldLabels', {'NOM_DEP': 'inline label', 'INSEE_DEP': 'header label', 'x': 'no label', 'y': 'no label', });
lyr_deptbdcr75_1.set('fieldLabels', {'NOM_DEP': 'inline label', 'INSEE_DEP': 'no label', 'x': 'header label', 'y': 'inline label', });
lyr_fichiercompletavecUAInom_2.set('fieldLabels', {'NOM': 'no label', 'UAI_ETBLT': 'no label', });
lyr_agrosupdijon2024isoles_3.set('fieldLabels', {'ID': 'no label', 'STATUT': 'no label', 'INSEE_COM': 'no label', 'INSEE_ARR': 'no label', 'INSEE_DEP': 'no label', 'INSEE_REG': 'no label', 'CODE_EPCI': 'no label', 'NOM_COM_M': 'no label', 'POPULATION': 'no label', 'TYPE': 'no label', 'NOM_COM': 'no label', 'X': 'no label', 'Y': 'no label', 'NOM': 'no label', 'PRENOM': 'no label', 'EXAMEN': 'no label', 'CP': 'no label', });
lyr_agrosupdijon2024isoles_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});