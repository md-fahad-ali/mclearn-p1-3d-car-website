import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/asset/model.gltf");
  const { actions } = useAnimations(animations, group);

  const wheel1 = useRef(null);
  const wheel2 = useRef(null);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Scene_1" position={[0.46, -0.22, -2]}>
          <group name="Empty" position={[-0.21, 0.22, 2]} scale={2.437}>
            <group
              name="Object_104"
              position={[0.123, -0.08, -0.463]}
              rotation={[1.062, 0, 0]}
              scale={0.316}
            />
            <group
              name="BrakeDisks2_1"
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <group
              name="BrakeDisks_0"
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <group
              name="Brakes_2"
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <group
              name="Carbon2_3"
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <group
              name="Decals_4"
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <group
              name="Details_5"
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <group
              name="Engine_6"
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <group
              name="Exhaust_7"
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <group
              name="Glass_8"
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <group
              name="GLTF_SceneRootNode"
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <group
              name="Grid1_9"
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <group
              name="GridOnTop_10"
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <group
              name="Grille_11"
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <group
              name="Headlights_12"
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <group
              name="Interior_13"
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <group
              name="MainBlack_14"
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <group
              name="MainCarbon_15"
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <group
              name="MainPaintjob_16"
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <group
              name="MainPlastics_17"
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <group
              name="Mechanicals_18"
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <group
              name="Mirrors_19"
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <group
              name="Object_112"
              position={[-0.328, -0.08, -0.463]}
              rotation={[1.062, 0, 0]}
              scale={0.316}
            />
            <group
              name="Object_120"
              position={[-0.328, -0.08, 0.38]}
              rotation={[1.062, 0, 0]}
              scale={0.316}
            />

            <group
              name="Object_53_1"
              ref={(el) => {
                wheel2.current = el;
                props.setTwoWheel(el);
              }}
              position={[0.186, -0.082, 0.381]}
              rotation={[-1.307, 0, 0]}
              scale={0.316}
            >
              <mesh
                name="Mesh_10001"
                geometry={nodes.Mesh_10001.geometry}
                material={materials["Rims.001"]}
                castShadow
              />
              <mesh
                name="Mesh_10001_1"
                geometry={nodes.Mesh_10001_1.geometry}
                material={materials["tires2.001"]}
                castShadow
              />
            </group>
            <group
              name="Object_62"
              ref={(el) => {
                wheel1.current = el;
                props.setOneWheel(el);
              }}
              position={[0.123, -0.08, -0.463]}
              rotation={[-1.463, 0, 0]}
              scale={0.316}
            >
              <mesh
                name="Mesh_3001"
                geometry={nodes.Mesh_3001.geometry}
                material={materials["tires2.001"]}
                castShadow
              />
              <mesh
                name="Mesh_3001_1"
                geometry={nodes.Mesh_3001_1.geometry}
                material={materials["Rims.001"]}
                castShadow
              />
            </group>
            <group
              name="Object_67_2"
              position={[-0.328, -0.08, -0.463]}
              rotation={[2.856, 0, 0]}
              scale={0.316}
            >
              <mesh
                name="Mesh_9001"
                geometry={nodes.Mesh_9001.geometry}
                material={materials["Rims.001"]}
                castShadow
              />
              <mesh
                name="Mesh_9001_1"
                geometry={nodes.Mesh_9001_1.geometry}
                material={materials["tires2.001"]}
                castShadow
              />
            </group>
            <group
              name="Object_7"
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            >
              <mesh
                name="Mesh_20001"
                geometry={nodes.Mesh_20001.geometry}
                material={materials["BrakeDisk.001"]}
                castShadow
              />
              <mesh
                name="Mesh_20001_1"
                geometry={nodes.Mesh_20001_1.geometry}
                material={materials["tires2.001"]}
                castShadow
              />
            </group>
            <group
              name="Object_91"
              position={[0.186, -0.082, 0.381]}
              rotation={[1.062, 0, 0]}
              scale={0.316}
            />
            <group
              name="P1-WheelBkL_38"
              position={[0.123, -0.08, -0.463]}
              scale={0.316}
            />
            <group
              name="P1-WheelBkR_41"
              position={[-0.328, -0.08, -0.463]}
              scale={0.316}
            />
            <group
              name="P1-WheelFtL_35"
              position={[0.123, -0.08, 0.38]}
              scale={0.316}
            />
            <group
              name="P1-WheelFtR_44"
              position={[-0.328, -0.08, 0.38]}
              scale={0.316}
            />
            <group
              name="P1Body_32"
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <group
              name="Pipes_20"
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <group
              name="Plate_21"
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <group
              name="RandomBlack_22"
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <group
              name="RandomGlossy_23"
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <group
              name="Rim1_33"
              position={[0.186, -0.082, 0.381]}
              scale={0.316}
            />
            <group
              name="Rim2_36"
              position={[0.178, -0.082, -0.462]}
              scale={0.316}
            />
            <group
              name="Rim3_42"
              position={[-0.391, -0.082, 0.381]}
              scale={0.316}
            />
            <group
              name="Rim4_39"
              position={[-0.383, -0.082, -0.462]}
              scale={0.316}
            />
            <group
              name="root"
              position={[-0.078, -0.183, -0.039]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.316}
            />
            <group
              name="SafetyBelt_24"
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <group
              name="Scene_1_1"
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <group
              name="Sketchfab_model"
              position={[-0.078, -0.183, -0.039]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.316}
            />
            <group
              name="SoundSytem_25"
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <group
              name="Spoiler_26"
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <group
              name="SpoilerBluePart_27"
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <group
              name="SpoilerConnectors_28"
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <group
              name="SpoilerHydraulics_29"
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <group
              name="Stichwork_30"
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <group
              name="Taillights_31"
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <group
              name="Tire1_34"
              position={[0.123, -0.08, 0.38]}
              scale={0.316}
            />
            <group
              name="Tire2_37"
              position={[0.123, -0.08, -0.463]}
              scale={0.316}
            />
            <group
              name="Tire3_43"
              position={[-0.328, -0.08, 0.38]}
              scale={0.316}
            />
            <group
              name="Tire4_40"
              position={[-0.328, -0.08, -0.463]}
              scale={0.316}
            />
            <mesh
              name="Object_10"
              geometry={nodes.Object_10.geometry}
              material={materials["Blue.001"]}
              castShadow
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <mesh
              name="Object_100"
              geometry={nodes.Object_100.geometry}
              material={materials["Details.001"]}
              castShadow
              position={[0.178, -0.082, -0.462]}
              scale={0.316}
            />
            <mesh
              name="Object_102"
              geometry={nodes.Object_102.geometry}
              material={materials["tires.001"]}
              castShadow
              position={[0.123, -0.08, -0.463]}
              scale={0.316}
            />
            <mesh
              name="Object_103"
              geometry={nodes.Object_103.geometry}
              material={materials["tires.001"]}
              castShadow
              position={[0.123, -0.08, -0.463]}
              scale={0.316}
            />
            <mesh
              name="Object_108"
              geometry={nodes.Object_108.geometry}
              material={materials["Details.001"]}
              castShadow
              position={[-0.383, -0.082, -0.462]}
              scale={0.316}
            />
            <mesh
              name="Object_110"
              geometry={nodes.Object_110.geometry}
              material={materials["tires.001"]}
              castShadow
              position={[-0.328, -0.08, -0.463]}
              scale={0.316}
            />
            <mesh
              name="Object_111"
              geometry={nodes.Object_111.geometry}
              material={materials["tires.001"]}
              castShadow
              position={[-0.328, -0.08, -0.463]}
              scale={0.316}
            />
            <mesh
              name="Object_116"
              geometry={nodes.Object_116.geometry}
              material={materials["Details.001"]}
              castShadow
              position={[-0.391, -0.082, 0.381]}
              scale={0.316}
            />
            <mesh
              name="Object_118"
              geometry={nodes.Object_118.geometry}
              material={materials["tires.001"]}
              castShadow
              position={[-0.328, -0.08, 0.38]}
              rotation={[1.062, 0, 0]}
              scale={0.316}
            />
            <mesh
              name="Object_119"
              geometry={nodes.Object_119.geometry}
              material={materials["tires.001"]}
              castShadow
              position={[-0.328, -0.08, 0.38]}
              scale={0.316}
            />
            <mesh
              name="Object_12"
              geometry={nodes.Object_12.geometry}
              material={materials["Carbon2.001"]}
              castShadow
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <mesh
              name="Object_14"
              geometry={nodes.Object_14.geometry}
              material={materials["Decals.001"]}
              castShadow
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <mesh
              name="Object_16"
              geometry={nodes.Object_16.geometry}
              material={materials["Details.001"]}
              castShadow
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <mesh
              name="Object_17"
              geometry={nodes.Object_17.geometry}
              material={materials["Blue.001"]}
              castShadow
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <mesh
              name="Object_19"
              geometry={nodes.Object_19.geometry}
              material={materials["Engine1.001"]}
              castShadow
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <mesh
              name="Object_20"
              geometry={nodes.Object_20.geometry}
              material={materials["Engine4.001"]}
              castShadow
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <mesh
              name="Object_21"
              geometry={nodes.Object_21.geometry}
              material={materials["Engine4.001"]}
              castShadow
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <mesh
              name="Object_22"
              geometry={nodes.Object_22.geometry}
              material={materials["Engine3.001"]}
              castShadow
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <mesh
              name="Object_23"
              geometry={nodes.Object_23.geometry}
              material={materials["Engine2.001"]}
              castShadow
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <mesh
              name="Object_25"
              geometry={nodes.Object_25.geometry}
              material={materials["Exhaust.001"]}
              castShadow
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <mesh
              name="Object_27"
              geometry={nodes.Object_27.geometry}
              material={materials["Glass.001"]}
              castShadow
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <mesh
              name="Object_29"
              geometry={nodes.Object_29.geometry}
              material={materials["Grid1.001"]}
              castShadow
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <mesh
              name="Object_31"
              geometry={nodes.Object_31.geometry}
              material={materials["Grid.001"]}
              castShadow
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <mesh
              name="Object_33"
              geometry={nodes.Object_33.geometry}
              material={materials["Grille.001"]}
              castShadow
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <mesh
              name="Object_35"
              geometry={nodes.Object_35.geometry}
              material={materials["Headlights.001"]}
              castShadow
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <mesh
              name="Object_36"
              geometry={nodes.Object_36.geometry}
              material={materials["HeadlightsEmissive.001"]}
              castShadow
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <mesh
              name="Object_38"
              geometry={nodes.Object_38.geometry}
              material={materials["Blue.001"]}
              castShadow
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <mesh
              name="Object_39"
              geometry={nodes.Object_39.geometry}
              material={materials["Blue.001"]}
              castShadow
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <mesh
              name="Object_40"
              geometry={nodes.Object_40.geometry}
              material={materials["Blue.001"]}
              castShadow
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <mesh
              name="Object_41"
              geometry={nodes.Object_41.geometry}
              material={materials["Interior.001"]}
              castShadow
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <mesh
              name="Object_43"
              geometry={nodes.Object_43.geometry}
              material={materials["Black.001"]}
              castShadow
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <mesh
              name="Object_44"
              geometry={nodes.Object_44.geometry}
              material={materials["Black.001"]}
              castShadow
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <mesh
              name="Object_45"
              geometry={nodes.Object_45.geometry}
              material={materials["Black.001"]}
              castShadow
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <mesh
              name="Object_46"
              geometry={nodes.Object_46.geometry}
              material={materials["Black.001"]}
              castShadow
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <mesh
              name="Object_47"
              geometry={nodes.Object_47.geometry}
              material={materials["Black.001"]}
              castShadow
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <mesh
              name="Object_48"
              geometry={nodes.Object_48.geometry}
              material={materials["Black.001"]}
              castShadow
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <mesh
              name="Object_5"
              geometry={nodes.Object_5.geometry}
              material={materials["BrakeDisk.001"]}
              castShadow
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <mesh
              name="Object_50"
              geometry={nodes.Object_50.geometry}
              material={materials["Carbon1.001"]}
              castShadow
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <mesh
              name="Object_51"
              geometry={nodes.Object_51.geometry}
              material={materials["Carbon1.001"]}
              castShadow
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <mesh
              name="Object_52"
              geometry={nodes.Object_52.geometry}
              material={materials["Carbon1.001"]}
              castShadow
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <mesh
              name="Object_53"
              geometry={nodes.Object_53.geometry}
              material={materials["Blue.001"]}
              castShadow
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <mesh
              name="Object_55"
              geometry={nodes.Object_55.geometry}
              material={materials["WhitePaintjob.001"]}
              castShadow
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <mesh
              name="Object_56"
              geometry={nodes.Object_56.geometry}
              material={materials["Carbon.001"]}
              castShadow
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <mesh
              name="Object_57"
              geometry={nodes.Object_57.geometry}
              material={materials["Blue.001"]}
              castShadow
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <mesh
              name="Object_59"
              geometry={nodes.Object_59.geometry}
              material={materials["Plastics.001"]}
              castShadow
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <mesh
              name="Object_61"
              geometry={nodes.Object_61.geometry}
              material={materials["Mechanicals.001"]}
              castShadow
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <mesh
              name="Object_63"
              geometry={nodes.Object_63.geometry}
              material={materials["Mirror.001"]}
              castShadow
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <mesh
              name="Object_65"
              geometry={nodes.Object_65.geometry}
              material={materials["Pipes.001"]}
              castShadow
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <mesh
              name="Object_67"
              geometry={nodes.Object_67.geometry}
              material={materials["Plate.001"]}
              castShadow
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <mesh
              name="Object_69"
              geometry={nodes.Object_69.geometry}
              material={materials["Black.001"]}
              castShadow
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <mesh
              name="Object_71"
              geometry={nodes.Object_71.geometry}
              material={materials["Glossy.001"]}
              castShadow
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <mesh
              name="Object_72_1"
              geometry={nodes.Object_72_1.geometry}
              material={materials["Rims.001"]}
              castShadow
              position={[-0.328, -0.08, 0.38]}
              rotation={[2.856, 0, 0]}
              scale={0.316}
            />
            <mesh
              name="Object_73"
              geometry={nodes.Object_73.geometry}
              material={materials["SafetyBelt.001"]}
              castShadow
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <mesh
              name="Object_75"
              geometry={nodes.Object_75.geometry}
              material={materials["GridSoundSytem.001"]}
              castShadow
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <mesh
              name="Object_77"
              geometry={nodes.Object_77.geometry}
              material={materials["Carbon.001"]}
              castShadow
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <mesh
              name="Object_79"
              geometry={nodes.Object_79.geometry}
              material={materials["Blue.001"]}
              castShadow
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <mesh
              name="Object_81"
              geometry={nodes.Object_81.geometry}
              material={materials["Black.001"]}
              castShadow
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <mesh
              name="Object_83"
              geometry={nodes.Object_83.geometry}
              material={materials["Glossy.001"]}
              castShadow
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <mesh
              name="Object_85"
              geometry={nodes.Object_85.geometry}
              material={materials["Stitchwork.001"]}
              castShadow
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <mesh
              name="Object_87"
              geometry={nodes.Object_87.geometry}
              material={materials["TaillightsEmissive.001"]}
              castShadow
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <mesh
              name="Object_88"
              geometry={nodes.Object_88.geometry}
              material={materials["TaillightsReflective.001"]}
              castShadow
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <mesh
              name="Object_9"
              geometry={nodes.Object_9.geometry}
              material={materials["Brakes.001"]}
              castShadow
              position={[-0.078, -0.183, -0.039]}
              scale={0.316}
            />
            <mesh
              name="Object_92"
              geometry={nodes.Object_92.geometry}
              material={materials["Details.001"]}
              castShadow
              position={[0.186, -0.082, 0.381]}
              scale={0.316}
            />
            <mesh
              name="Object_94"
              geometry={nodes.Object_94.geometry}
              material={materials["tires.001"]}
              castShadow
              position={[0.123, -0.08, 0.38]}
              scale={0.316}
            />
            <mesh
              name="Object_95"
              geometry={nodes.Object_95.geometry}
              material={materials["tires.001"]}
              castShadow
              position={[0.123, -0.08, 0.38]}
              scale={0.316}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/asset/model.gltf");
