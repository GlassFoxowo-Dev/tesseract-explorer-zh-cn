# 写在前面

在冲浪的时候看到了这个项目，于是萌生了翻译它的想法，花了点时间，翻译成了简体中文。  
转载请保留原作者与译者的名字，谢谢。
# Tesseract Explorer

欢迎来到第四维度！请访问[这里](https://tsherif.github.io/tesseract-explorer/)查看实时应用！  
玻狸的中文翻译版本：[中文版点这里](https://foxderin.github.io/tesseract-explorer-zh-cn/)

![Tesseract](img/tesseract-350x350.png?raw=true)

## 什么是Tesseract？

[tesseract](https://en.wikipedia.org/wiki/Tesseract)，也称为超立方体或8-胞体，是2D正方形和3D立方体的四维模拟体。其3D“表面”由8个立方体（称为单元）组成，每个沿着4个轴线（X、Y、Z和W）有2个。这些单元封闭了tesseract的四维超体积。想象tesseract的形状的一种方式是，空间被折叠，使得每个单元的六个面都与其他6个单元的一个面相平行，而唯一被排除的单元是沿着同一轴的对面的单元。这类似于3D立方体的每个正方形面的4条边与其他4个面的边相平行，这在2D空间中是不可能的形状，但在折叠到3D时是可能的。

显然，我们无法直接可视化一个tesseract，因为我们只生存在三维空间中，但我们可以将其形式投影到3D空间，实质上是将4维的“照片”投影到我们宇宙的3D“胶片”上（就像我们用相机将我们的3D宇宙摄影到2D相机胶片上一样）。我强烈推荐[这个网站](http://eusebeia.dyndns.org/4d/vis/vis)以了解对于可视化4D形状的入门知识。

## Tesseract Explorer

[超立方体浏览器-中文](https://glassfoxowo-dev.github.io/tesseract-explorer-zh-cn/)提供了各种工具，用于可视化4D tesseract投影到3D空间的过程。tesseract可以在4D空间中进行操作，然后使用[WebGL 2](https://get.webgl.org/webgl2/)在浏览器中渲染其在3D空间中的投影。

### 3D视图控制

可以使用鼠标探索tesseract的3D投影。单击并拖动以围绕摄像机旋转，使用鼠标滚轮进行缩放。

### 控制面板选项

- **渲染**：
    - `transparent`：透明渲染投影。
    - `cutout`：投影的不透明渲染，每个面上都有剪切出的孔，以显示内部单元。
    - `solid`：投影的不透明渲染。

- **投影**：
    - `perspective`：在W轴上离原点一定距离放置4D空间中的“相机”。离相机更远的单元投影到比较小的立方体，而离相机更近的单元则投影为畸变的立方体（或[视锥](https://en.wikipedia.org/wiki/Frustum)）。
    - `orthographic`：投影将4D场景平展到3D，不受距离引起的任何缩放影响。一个tesseract的以单元为基础的视图将正交投影到一个3D立方体。

- **着色方式**：
    - `axis`：按轴着色，X轴对着红色，Y轴对着绿色，Z轴对着蓝色，W轴对着黄色。
    - `cell`：每个单元都单独着色。在轴上的一对单元将具有其轴颜色的浅色和深色阴影，正单元为深色，负单元为浅色。

- **展开程度**：将tesseract的单元旋转到3D空间中，形成[达利十字](https://en.wikipedia.org/wiki/Polycube#Octacubes_and_hypercube_unfoldings)的形式。

- **旋转**：将tesseract沿4D空间中轴对旋转的6个平面之一旋转。前3个旋转包括W轴，因此将更直接地影响投影。

- **自动旋转**：在4D空间中由轴对形成的6个平面上旋转tesseract的动画。

- **缩放**：在4D空间中沿4个轴缩放tesseract。缩放显示了4D超体积的扫过（就像沿一个轴缩放3D立方体显示了其内部3D体积的扫过）。

- **单元可见性**：隐藏或显示单个单元。这可以使跟踪某些变换变得更容易。

## 其他资源

以下是我发现在理解4D可视化方面非常有帮助的资源：

- [4D Visualization](http://eusebeia.dyndns.org/4d/vis/vis) 文章系列
- [Dimensions](https://www.youtube.com/playlist?list=PL3C690048E1531DC7) 由Jos Leys、Étienne Ghys和Aurélien Alvarez制作的视频系列
- [4D Toys](https://4dtoys.com/) 由Marc ten Bosch制作的游戏
