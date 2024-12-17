window.viewer = new Potree.Viewer(document.getElementById("potree_render_area"));

viewer.setEDLEnabled(true);
viewer.setFOV(60);
viewer.setPointBudget(4_000_000);
viewer.useHQ = true
viewer.loadSettingsFromURL();
viewer.setDescription('Extrait du Géoportail LiDAR du <a target=_blank href="https://sitn.ne.ch/">SITN</a></p>');
viewer.loadGUI(() => {
    viewer.setLanguage('fr');
    $("#menu_scene").next().show();
});

const scene = viewer.scene;
Potree.loadPointCloud("https://sitn.ne.ch/lidar/pointclouds/aerial/2022/lidar2022/metadata.json").then(result => {
    const pointcloud = result.pointcloud;
    const material = pointcloud.material;
    pointcloud.name = "SITN LiDAR 2022";
    material.size = 1.5;
    material.pointSizeType = Potree.PointSizeType.FIXED;
    material.activeAttributeName = "rgba";
    material.shape = Potree.PointShape.CIRCLE;
    scene.addPointCloud(pointcloud);
    viewer.fitToScreen();
    pointcloud.visible = true;  
});
