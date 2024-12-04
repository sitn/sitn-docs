console.log("In=")
	
window.viewer = new Potree.Viewer(document.getElementById("potree_render_area"));

viewer.setEDLEnabled(true);
viewer.setFOV(60);
viewer.setPointBudget(4*1000*1000);
viewer.useHQ = true
viewer.loadSettingsFromURL();
viewer.setDescription('Extrait du Géoportail LiDAR du<a target=_blank href="https://sitn.ne.ch/"> SITN</a></p>');
viewer.loadGUI(() => {
    viewer.setLanguage('fr');
    $("#menu_scene").next().show();
});


async function loadDatasets(){

    let scene = viewer.scene;
    
    {
        let result = await Potree.loadPointCloud("https://sitn.ne.ch/lidar/pointclouds/aerial/2022/lidar2022/metadata.json"); 
        let pointcloud = result.pointcloud;
        let material = pointcloud.material;

        pointcloud.name = "SITN LiDAR 2022";
        material.size = 1.5;
        material.pointSizeType = Potree.PointSizeType.FIXED;
        material.activeAttributeName = "rgba";
        material.shape = Potree.PointShape.CIRCLE;
        scene.addPointCloud(pointcloud);
        viewer.fitToScreen();
        pointcloud.visible = true;
    }
};

loadDatasets();