// Description: This script is used to load a LiDAR point cloud in the Potree viewer.
// It is used in the LiDAR example of the SITN website.


// import



console.log("In=")
	
window.viewer = new Potree.Viewer(document.getElementById("potree_render_area"));

viewer.setEDLEnabled(true);
viewer.setFOV(60);
viewer.setPointBudget(4*1000*1000);
viewer.useHQ = true
viewer.loadSettingsFromURL();
viewer.setDescription('Géoportail LiDAR du<a target=_blank href="https://sitn.ne.ch/"> SITN</a></p>');
viewer.loadGUI(() => {
    viewer.setLanguage('fr');
    $("#menu_scene").next().show();
    viewer.toggleSidebar();


let section = $(`
        <h3 id="menu_meta" class="accordion-header ui-widget"><span>Aide navigation</span></h3>
        <div class="accordion-content ui-widget"></div>
    `);
    let content = section.last();
    content.html(`
  <img src="mouse.png" alt="mouse" width="100%"> 
    `);
    section.first().click(() => content.slideToggle());
    section.insertBefore($('#menu_about'));
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
