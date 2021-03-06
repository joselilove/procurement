-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 29, 2019 at 01:57 AM
-- Server version: 8.0.13-4
-- PHP Version: 7.2.19-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vo6Y22GxMl`
--

-- --------------------------------------------------------

--
-- Table structure for table `announcement`
--

CREATE TABLE `announcement` (
  `announcement_id` int(11) NOT NULL,
  `announcement_from` int(11) NOT NULL,
  `announcement_title` varchar(45) NOT NULL,
  `announcement_content` text NOT NULL,
  `category` varchar(45) NOT NULL,
  `announcement_start_date` text NOT NULL,
  `announcement_end_date` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `announcement`
--

INSERT INTO `announcement` (`announcement_id`, `announcement_from`, `announcement_title`, `announcement_content`, `category`, `announcement_start_date`, `announcement_end_date`) VALUES
(1, 9, 'Deadline of PPMP', 'Sorry guyz!!', 'bg-danger', '1559520000000', '1559692800000'),
(2, 9, 'BAC office not available', 'This range of date only', 'bg-info', '1561420800000', '1561680000000'),
(3, 9, 'ACAD program deadline extended', '', 'bg-warning', '1560902400000', '1561075200000'),
(4, 9, 'all POs have been granted permission', 'Thank you!1', 'bg-success', '1561939200000', '1562198400000'),
(5, 9, 'ACAD program deadline extended', '', 'bg-warning', '1559779200000', '1559779200000'),
(6, 9, 'ACAD program deadline extended', '', 'bg-warning', '1560124800000', '1560124800000'),
(7, 9, 'sdfs', 'dfsdfd', 'bg-primary', '1560643200000', '1560902400000'),
(8, 9, 'ACAD', '', 'bg-primary', '1560297600000', '1560470400000');

-- --------------------------------------------------------

--
-- Table structure for table `items_table`
--

CREATE TABLE `items_table` (
  `Item_id_FIELD` int(11) NOT NULL,
  `Item_type_FIELD` varchar(15) NOT NULL,
  `Item_category_FIELD` varchar(70) NOT NULL,
  `Item_subCategory_FIELD` varchar(45) NOT NULL,
  `Item_generalDescription_FIELD` text NOT NULL,
  `Item_units_FIELD` varchar(50) NOT NULL,
  `Item_unitPrice_FIELD` float NOT NULL,
  `Item_procMode_FIELD` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `items_table`
--

INSERT INTO `items_table` (`Item_id_FIELD`, `Item_type_FIELD`, `Item_category_FIELD`, `Item_subCategory_FIELD`, `Item_generalDescription_FIELD`, `Item_units_FIELD`, `Item_unitPrice_FIELD`, `Item_procMode_FIELD`) VALUES
(1, 'Non-CSE', 'COMMON USE OFFICE SUPPLIES', 'WRITING SUPPLIES AND ACCESORIES', 'BALLPEN, BLACK 12\'s/box (BP-S Fine, tip size: 0.7mm and 1.0mm)', 'box', 300, 'Public Bidding'),
(2, 'Non-CSE', 'COMMON USE OFFICE SUPPLIES', 'WRITING SUPPLIES AND ACCESORIES', 'BALLPEN, RED 12\'s/box (BP-S Fine, tip size: 0.7mm and 1.0mm)', 'box', 300, 'Public Bidding'),
(3, 'Non-CSE', 'COMMON USE OFFICE SUPPLIES', 'WRITING SUPPLIES AND ACCESORIES', 'SIGN PEN, V5, BLACK 12\'s/box (Hi-Tecpoint, extra fine rollerball pen, 0.5mm nib tip, 0.3mm line width)', 'box', 660, 'Public Bidding'),
(4, 'Non-CSE', 'COMMON USE OFFICE SUPPLIES', 'WRITING SUPPLIES AND ACCESORIES', 'WHITEBOARD MARKERS,FINE BLACK, 12\'s/box (tip size: bullet)', 'box', 600, 'Public Bidding'),
(5, 'Non-CSE', 'OFFICE SUPPLIES ESSENTIALS', '', 'BOARD ERASER BIG', 'pc', 50, 'Public Bidding'),
(6, 'Non-CSE', 'OFFICE SUPPLIES ESSENTIALS', '', 'STAPLE WIRE, No. 35 (5000\'s/box)', 'box', 35.23, 'Public Bidding'),
(7, 'Non-CSE', 'OFFICE SUPPLIES ESSENTIALS', '', 'STAPLER, #35, heavy duty w/ stapler Remover', 'unit', 120, 'Public Bidding'),
(8, 'CSE', 'COMMON ELECTRICAL SUPPLIES', '', 'BATTERY, dry cell, AA, 2 pieces per blister pack', ' pack', 20.28, 'Public Bidding'),
(9, 'CSE', 'COMMON ELECTRICAL SUPPLIES', '', 'BATTERY, dry cell, AAA, 2 pieces per blister pack', 'pack', 19.2, 'Public Bidding'),
(10, 'CSE', 'COMMON ELECTRICAL SUPPLIES', '', 'BATTERY, dry cell, D, 1.5 volts, alkaline', 'pack', 91.94, 'Public Bidding'),
(11, 'CSE', 'COMMON OFFICE SUPPLIES', '', 'ACETATE, thickness: 0.075mm min (gauge #3)', 'roll', 766.73, 'Public Bidding'),
(12, 'CSE', 'COMMON OFFICE SUPPLIES', '', 'AIR FRESHENER, aerosol, 280ml/150g min', 'can', 88.69, 'Public Bidding'),
(13, 'CSE', 'COMMON OFFICE SUPPLIES', '', 'ALCOHOL, ethyl, 68%-70%, scented, 500ml (-5ml)', 'bottle', 49.73, 'Public Bidding'),
(14, 'CSE', 'COMMON OFFICE DEVICES', '', 'CUTTER BLADE, for heavy duty cutter', 'tube', 10.22, 'Public Bidding'),
(15, 'CSE', 'COMMON OFFICE DEVICES', '', 'CUTTER KNIFE, for general purpose', 'piece', 20.55, 'Public Bidding'),
(16, 'Non-CSE', 'JANITORIAL AND CLEANING SUPPLIES', '', 'ALCOHOL 70% 500ml', 'bottle', 75, 'Public Bidding'),
(17, 'Non-CSE', 'JANITORIAL AND CLEANING SUPPLIES', '', 'BATHROOM SOAP, 135g pure white', 'box', 75, 'Public Bidding'),
(20, 'Non-CSE', 'MEDICAL AND LABORATORY GLASSWARE', '', 'ASPIRATOR, rubber, w/ 3 valves', 'piece', 630, 'Shopping'),
(21, 'Non-CSE', 'MEDICAL AND LABORATORY GLASSWARE', '', 'BEAKER, 100ml', 'piece', 222.88, 'Shopping'),
(22, 'Non-CSE', 'OFFICE SUPPLIES', 'PAPER SUPPLIES', 'A4 Bond Paper', 'ream', 120, 'Shopping');

-- --------------------------------------------------------

--
-- Table structure for table `notification_table`
--

CREATE TABLE `notification_table` (
  `notification_id` int(11) NOT NULL,
  `user_id_from` int(45) NOT NULL,
  `user_id_to` int(45) DEFAULT NULL,
  `notification_type` varchar(45) NOT NULL,
  `notification_content` varchar(100) NOT NULL,
  `is_seen` int(2) NOT NULL DEFAULT '0',
  `remarks` varchar(60) NOT NULL DEFAULT ' ',
  `push_notif` int(45) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `is_deleted` int(2) NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `notification_table`
--

INSERT INTO `notification_table` (`notification_id`, `user_id_from`, `user_id_to`, `notification_type`, `notification_content`, `is_seen`, `remarks`, `push_notif`, `is_deleted`) VALUES
(1, 9, 15, 'approved', 'Your submitted PPMP id no 131 has been approved by Esperanza Paraguison', 1, '', 0, 0),
(2, 9, 15, 'pending', 'Your submitted PPMP id no 130 has been pending by Esperanza Paraguison', 1, '', 0, 0),
(3, 9, 15, 'approved', 'Your submitted PPMP id no 130 has been approved by Esperanza Paraguison', 1, '', 0, 0),
(4, 9, 15, 'pending', 'Your submitted PPMP id no 131 has been pending by Esperanza Paraguison', 1, '', 0, 0),
(5, 9, 15, 'declined', 'Your submitted PPMP id no 131 has been declined by Esperanza Paraguison', 1, '', 0, 0),
(6, 9, 15, 'declined', 'Your submitted PPMP id no 131 has been declined by Esperanza Paraguison', 1, 'kalabas ay nalakad', 0, 0),
(24, 21, NULL, 'modification request', 'Leslie Galila submitted a modification request for PPMP id no 21', 1, 'leslie', 0, 0),
(23, 9, 15, 'approved', 'Your submitted modification request for PPMP id no 134 has been approved by Esperanza Paraguison', 0, 'sa', 0, 0),
(10, 9, 15, 'pending', 'Your submitted PPMP id no 131 has been pending by Esperanza Paraguison', 1, 'Sorry!!', 0, 0),
(11, 9, 15, 'approved', 'Your submitted PPMP id no 131 has been approved by Esperanza Paraguison', 1, 'yehey', 0, 0),
(21, 15, NULL, 'modification request', 'Maria Adrielle S. Estigoy submitted a modification request for PPMP id no undefined', 1, '1st sample', 0, 0),
(22, 15, NULL, 'modification request', 'Maria Adrielle S. Estigoy submitted a modification request for PPMP id no 15', 1, 'Sample ', 0, 0),
(14, 9, 15, 'pending', 'Your submitted PPMP id no 131 has been pending by Esperanza Paraguison', 1, '', 0, 0),
(15, 9, 15, 'declined', 'Your submitted PPMP id no 131 has been declined by Esperanza Paraguison', 1, '', 0, 0),
(16, 9, 15, 'approved', 'Your submitted PPMP id no 134 has been approved by Esperanza Paraguison', 1, 'Good', 0, 0),
(17, 9, 15, 'approved', 'Your submitted modification request for PPMP id no 135 has been approved by Esperanza Paraguison', 0, 'Good job!!!', 0, 0),
(25, 9, 21, 'approved', 'Your submitted modification request for PPMP id no 176 has been approved by Esperanza Paraguison', 1, 'good!!!', 0, 0),
(26, 9, 21, 'approved', 'Your submitted PPMP id no 176 has been approved by Esperanza Paraguison', 0, 'good', 0, 0),
(27, 21, NULL, 'modification request', 'Leslie Galila submitted a modification request for PPMP id no 21', 1, 'oops', 0, 0),
(28, 9, 21, 'declined', 'Your submitted modification request for PPMP id no 176 has been declined by Esperanza Paraguison', 0, 'sorry!!', 0, 0),
(29, 15, NULL, 'modification request', 'Maria Adrielle S. Estigoy submitted a modification request for PPMP id no 15', 1, 'sa', 0, 0),
(30, 21, NULL, 'modification request', 'Leslie Galila submitted a modification request for PPMP id no 21', 1, 'sa123', 0, 0),
(31, 9, 15, 'approved', 'Your submitted modification request for PPMP id no 134 has been approved by Esperanza Paraguison', 0, 'sasasas', 0, 0),
(32, 9, 21, 'approved', 'Your submitted modification request for PPMP id no 176 has been approved by Esperanza Paraguison', 0, '', 0, 0),
(33, 9, 15, 'approved', 'Your submitted PPMP id no 135 has been approved by Esperanza Paraguison', 0, '', 0, 0),
(34, 9, 9, 'declined', 'Your submitted PPMP id no 174 has been declined by Esperanza Paraguison', 0, '', 0, 0),
(35, 6, NULL, 'modification request', 'C-Jay Paraguison submitted a modification request for PPMP id no 6', 1, 'kok', 0, 0),
(36, 9, 6, 'approved', 'Your submitted modification request for PPMP id no 177 has been approved by Esperanza Paraguison', 0, 'kk', 0, 0),
(37, 6, NULL, 'modification request', 'C-Jay Paraguison submitted a modification request for PPMP id no 6', 1, 'asas', 0, 0),
(38, 9, 6, 'declined', 'Your submitted modification request for PPMP id no 177 has been declined by Esperanza Paraguison', 0, 'asas', 0, 0),
(39, 6, NULL, 'modification request', 'C-Jay Paraguison submitted a modification request for PPMP id no 6', 1, 'asas', 0, 0),
(40, 6, NULL, 'modification request', 'C-Jay Paraguison submitted a modification request for PPMP id no 6', 1, 'asas', 0, 0),
(41, 6, NULL, 'modification request', 'C-Jay Paraguison submitted a modification request for PPMP id no 6', 1, 'sasas', 0, 0),
(42, 6, NULL, 'modification request', 'C-Jay Paraguison submitted a modification request for PPMP id no 6', 1, 'asasss', 0, 0),
(43, 6, NULL, 'modification request', 'C-Jay Paraguison submitted a modification request for PPMP id no 6', 1, 'ass', 0, 0),
(44, 6, NULL, 'modification request', 'C-Jay Paraguison submitted a modification request for PPMP id no 6', 1, '', 0, 0),
(45, 6, NULL, 'modification request', 'C-Jay Paraguison submitted a modification request for PPMP id no 6', 1, 'assasaas', 0, 0),
(46, 9, 21, 'approved', 'Your submitted PPMP id no 178 has been approved by Esperanza Paraguison', 1, 'Good job!!', 0, 0),
(47, 9, 15, 'PO-assigned', 'The respective Purchase Order of your Purchase Request has assigned to you by Esperanza Paraguison', 1, 'PO# a', 0, 0),
(48, 21, NULL, 'ppmp request', 'Leslie Galila submitted a PPMP id no 181', 1, '', 0, 0),
(49, 9, 21, 'approved', 'Your submitted PPMP id no 181 has been approved by Esperanza Paraguison', 1, 'Good Job', 0, 0),
(153, 9, 0, 'announcement', 'UPDATED: Item in ADMIN are all delivered', 0, '', 0, 0),
(152, 9, 0, 'announcement', 'CREATED: Item in ADMIN are all delivered', 0, '', 0, 0),
(151, 9, 0, 'announcement', 'CREATED: Item in RET Program are all awarded', 0, '', 0, 0),
(62, 9, 18, 'pending', 'Your submitted PPMP id no 124 has been pending by Esperanza Paraguison', 0, 'Invalid program', 0, 0),
(150, 9, 0, 'announcement', 'CREATED: System maintenance', 0, '', 0, 0),
(64, 9, 9, 'approved', 'Your submitted PPMP id no 173 has been approved by Esperanza Paraguison', 0, '', 0, 0),
(65, 9, 9, 'approved', 'Your submitted PPMP id no 172 has been approved by Esperanza Paraguison', 0, '', 0, 0),
(66, 9, 9, 'approved', 'Your submitted PPMP id no 171 has been approved by Esperanza Paraguison', 0, '', 0, 0),
(67, 9, 9, 'approved', 'Your submitted PPMP id no 170 has been approved by Esperanza Paraguison', 0, '', 0, 0),
(68, 9, 9, 'approved', 'Your submitted PPMP id no 169 has been approved by Esperanza Paraguison', 0, '', 0, 0),
(69, 9, 9, 'approved', 'Your submitted PPMP id no 168 has been approved by Esperanza Paraguison', 0, '', 0, 0),
(70, 9, 9, 'approved', 'Your submitted PPMP id no 167 has been approved by Esperanza Paraguison', 0, '', 0, 0),
(71, 9, 9, 'approved', 'Your submitted PPMP id no 166 has been approved by Esperanza Paraguison', 0, '', 0, 0),
(149, 9, 0, 'announcement', 'DELETED: PPMPP Deadline', 0, '', 0, 0),
(147, 9, 0, 'announcement', 'CREATED: Procurement office are now avilable', 0, '', 0, 0),
(146, 9, 0, 'announcement', 'CREATED: ALL department under ADMIN are approved', 0, '', 0, 0),
(84, 6, NULL, 'modification request', 'C-Jay Paraguison submitted a modification request for PPMP id no 6', 1, '', 0, 0),
(80, 9, 21, 'approved', 'Your submitted modification request for PPMP id no 176 has been approved by Esperanza Paraguison', 0, '', 0, 0),
(83, 9, 6, 'approved', 'Your submitted PPMP id no 182 has been approved by Esperanza Paraguison', 1, '', 0, 0),
(82, 6, NULL, 'ppmp request', 'C-Jay Paraguison submitted a PPMP id no 182', 1, '', 0, 0),
(85, 9, 6, 'approved', 'Your submitted modification request for PPMP id no 182 has been approved by Esperanza Paraguison', 1, '', 0, 0),
(86, 21, NULL, 'modification request', 'Leslie Galila submitted a modification request for PPMP id no 21', 1, '', 0, 0),
(87, 9, 21, 'approved', 'Your submitted modification request for PPMP id no 176 has been approved by Esperanza Paraguison', 1, '', 0, 0),
(88, 21, NULL, 'modification request', 'Leslie Galila submitted a modification request for PPMP id no 21', 1, '', 0, 0),
(89, 21, NULL, 'modification request', 'Leslie Galila submitted a modification request for PPMP id no 21', 1, '', 0, 0),
(90, 9, 21, 'approved', 'Your submitted modification request for PPMP id no 180 has been approved by Esperanza Paraguison', 1, '', 0, 0),
(148, 9, 0, 'announcement', 'undefined PPMPP Deadline', 0, '', 0, 0),
(145, 9, 0, 'announcement', 'CREATED: CAS department PPMP missing', 0, '', 0, 0),
(143, 9, 0, 'announcement', 'CREATED: Finalize your PPMP', 0, '', 0, 0),
(144, 9, 0, 'announcement', 'CREATED: All department PPMP under ACAD are declined', 0, '', 0, 0),
(141, 9, 0, 'announcement', 'CREATED: Procurement office not available', 0, '', 0, 0),
(142, 9, 0, 'announcement', 'CREATED: PPMPP Deadline', 0, '', 0, 0),
(154, 9, 0, 'announcement', 'UPDATED: Procurement office are now avilable', 0, '', 0, 0),
(155, 9, 0, 'announcement', 'CREATED: All mod request are declined', 0, '', 0, 0),
(156, 9, 0, 'announcement', 'UPDATED: PPMPP Deadline', 0, '', 0, 0),
(157, 9, 0, 'announcement', 'undefined System maintenance', 0, '', 0, 0),
(158, 9, 0, 'announcement', 'DELETED: System maintenance', 0, '', 0, 0),
(159, 9, 0, 'announcement', 'undefined Item in RET Program are all awarded', 0, '', 0, 0),
(160, 9, 0, 'announcement', 'undefined All mod request are declined', 0, '', 0, 0),
(161, 9, 0, 'announcement', 'undefined Item in RET Program are all awarded', 0, '', 0, 0),
(162, 21, NULL, 'modification request', 'Leslie Galila submitted a modification request for PPMP id no 21', 1, '', 0, 0),
(163, 9, 21, 'approved', 'Your submitted modification request for PPMP id no 180 has been approved by Esperanza Paraguison', 0, 'Good!!', 0, 0),
(164, 9, 21, 'approved', 'Your submitted PPMP id no 180 has been approved by Esperanza Paraguison', 1, 'Good job', 0, 0),
(165, 9, 0, 'approved', 'Your submitted PPMP id no 3 has been approved by Esperanza Paraguison', 0, '', 0, 0),
(166, 21, NULL, 'modification request', 'Leslie Galila submitted a modification request for PPMP id no 21', 1, '', 0, 0),
(167, 9, 21, 'PO-assigned', 'The respective Purchase Order of your Purchase Request has assigned to you by Esperanza Paraguison', 1, 'PO# a', 0, 0),
(168, 9, 15, 'PO-remarks updated', 'Your Purchase Order Status has been updated to \'Awarded\' by Esperanza Paraguison', 0, 'PO# a', 0, 0),
(169, 39, NULL, 'ppmp request', 'Jasa submitted a PPMP id no 212', 1, '', 0, 0),
(170, 9, 39, 'approved', 'Your submitted PPMP id no 212 has been approved by Esperanza Paraguison', 1, '', 0, 0),
(171, 39, NULL, 'modification request', 'Jasa submitted a modification request for PPMP id no 39', 1, 'Need samples', 0, 0),
(172, 9, 39, 'approved', 'Your submitted modification request for PPMP id no 212 has been approved by Esperanza Paraguison', 0, '', 0, 0),
(173, 9, 0, 'announcement', 'undefined Item in RET Program are all awarded', 0, '', 0, 0),
(174, 9, 0, 'announcement', 'CREATED: Sample title', 0, '', 0, 0),
(175, 9, 15, 'PO-remarks updated', 'Your Purchase Order Status has been updated to \'Delivered\' by Esperanza Paraguison', 0, 'PO# a', 0, 0),
(176, 9, 39, 'PO-assigned', 'The respective Purchase Order of your Purchase Request has assigned to you by Esperanza Paraguison', 1, 'PO# a', 0, 0),
(177, 21, NULL, 'modification request', 'Leslie Galila submitted a modification request for PPMP id no 21', 1, '', 0, 0),
(178, 9, 0, 'announcement', 'CREATED: Deadline of PPMP', 0, '', 0, 0),
(179, 9, 0, 'announcement', 'CREATED: BAC office not found', 0, '', 0, 0),
(180, 9, 0, 'announcement', 'UPDATED: BAC office not available', 0, '', 0, 0),
(181, 9, 0, 'announcement', 'CREATED: ACAD program deadline extended', 0, '', 0, 0),
(182, 9, 0, 'announcement', 'UPDATED: ACAD program deadline extended', 0, '', 0, 0),
(183, 9, 0, 'announcement', 'CREATED: all POs have been granted permission', 0, '', 0, 0),
(184, 9, 21, 'approved', 'Your submitted modification request for PPMP id no 178 has been approved by Esperanza Paraguison', 1, '', 0, 0),
(185, 9, 39, 'PO-remarks updated', 'Your Purchase Order Status has been updated to \'Awarded\' by Esperanza Paraguison', 1, 'PO# a', 0, 0),
(186, 9, 6, 'PO-assigned', 'The respective Purchase Order of your Purchase Request has assigned to you by Esperanza Paraguison', 1, 'PO# v', 0, 0),
(187, 9, 6, 'PO-remarks updated', 'Your Purchase Order Status has been updated to \'Awarded\' by Esperanza Paraguison', 1, 'PO# v', 0, 0),
(188, 9, NULL, 'ppmp request', 'Esperanza Paraguison submitted a PPMP id no 211', 0, '', 0, 0),
(189, 21, NULL, 'ppmp request', 'Leslie Galila submitted a PPMP id no 199', 1, '', 0, 0),
(190, 9, 21, 'approved', 'Your submitted PPMP id no 199 has been approved by Esperanza Paraguison', 1, '', 0, 0),
(191, 9, 21, 'PO-assigned', 'The respective Purchase Order of your Purchase Request has assigned to you by Esperanza Paraguison', 1, 'PO# a', 0, 0),
(192, 9, 21, 'PO-remarks updated', 'Your Purchase Order Status has been updated to \'Awarded\' by Esperanza Paraguison', 1, 'PO# a', 0, 0),
(193, 21, NULL, 'ppmp request', 'Leslie Galila submitted a PPMP id no 210', 1, '', 0, 0),
(194, 21, NULL, 'ppmp request', 'Leslie Galila submitted a PPMP id no 215', 1, '', 0, 0),
(195, 21, NULL, 'modification request', 'Leslie Galila submitted a modification request for PPMP id no 21', 1, '', 0, 0),
(196, 9, 0, 'announcement', 'undefined ACAD program deadline extended', 0, '', 0, 0),
(197, 9, 0, 'announcement', 'undefined ACAD program deadline extended', 0, '', 0, 0),
(198, 9, 0, 'announcement', 'CREATED: sdfs', 0, '', 0, 0),
(199, 9, 0, 'announcement', 'CREATED: ACAD', 0, '', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `pmrpurchaseorders_table`
--

CREATE TABLE `pmrpurchaseorders_table` (
  `PMRpurchaseOrder_id_FIELD` int(11) NOT NULL,
  `PMRpurchaseOrder_poNo_FIELD` varchar(20) NOT NULL,
  `PMRpurchaseOrder_procProgOrProj_FIELD` tinytext NOT NULL,
  `PMRpurchaseOrder_pmoOrEnduser_FIELD` tinytext NOT NULL,
  `PMRpurchaseOrder_procMode_FIELD` tinytext NOT NULL,
  `PMRpurchaseOrder_preProcConference_FIELD` tinytext NOT NULL,
  `PMRpurchaseOrder_adsOrPostOfIB_FIELD` tinytext NOT NULL,
  `PMRpurchaseOrder_preBidConf_FIELD` tinytext NOT NULL,
  `PMRpurchaseOrder_eligibilityCheck_FIELD` tinytext NOT NULL,
  `PMRpurchaseOrder_subOrOpenOfBids_FIELD` tinytext NOT NULL,
  `PMRpurchaseOrder_bidEvaluation_FIELD` tinytext NOT NULL,
  `PMRpurchaseOrder_postQual_FIELD` tinytext NOT NULL,
  `PMRpurchaseOrder_noticeOfAward_FIELD` date NOT NULL,
  `PMRpurchaseOrder_contractSigningOrApprovePO_FIELD` date NOT NULL,
  `PMRpurchaseOrder_deliveryTerms_FIELD` varchar(50) NOT NULL,
  `PMRpurchaseOrder_deliveryOrCompletion_FIELD` date NOT NULL,
  `PMRpurchaseOrder_paymentMode_FIELD` varchar(50) NOT NULL,
  `PMRpurchaseOrder_sourceOfFunds_FIELD` varchar(30) NOT NULL,
  `PMRpurchaseOrder_abcTotal_FIELD` float NOT NULL,
  `PMRpurchaseOrder_contractCostTotal_FIELD` float NOT NULL,
  `PMRpurchaseOrder_constructorOrSupplier_FIELD` tinytext NOT NULL,
  `PMRpurchaseOrder_itemPurchase_FIELD` tinytext NOT NULL,
  `PMRpurchaseOrder_remarks_FIELD` tinytext NOT NULL,
  `PMR_id_FIELD` int(11) NOT NULL,
  `PMRpurchaseOrder_procActivityStatus_FIELD` varchar(10) DEFAULT NULL,
  `EndUser_id_FIELD` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pmrpurchaseorders_table`
--

INSERT INTO `pmrpurchaseorders_table` (`PMRpurchaseOrder_id_FIELD`, `PMRpurchaseOrder_poNo_FIELD`, `PMRpurchaseOrder_procProgOrProj_FIELD`, `PMRpurchaseOrder_pmoOrEnduser_FIELD`, `PMRpurchaseOrder_procMode_FIELD`, `PMRpurchaseOrder_preProcConference_FIELD`, `PMRpurchaseOrder_adsOrPostOfIB_FIELD`, `PMRpurchaseOrder_preBidConf_FIELD`, `PMRpurchaseOrder_eligibilityCheck_FIELD`, `PMRpurchaseOrder_subOrOpenOfBids_FIELD`, `PMRpurchaseOrder_bidEvaluation_FIELD`, `PMRpurchaseOrder_postQual_FIELD`, `PMRpurchaseOrder_noticeOfAward_FIELD`, `PMRpurchaseOrder_contractSigningOrApprovePO_FIELD`, `PMRpurchaseOrder_deliveryTerms_FIELD`, `PMRpurchaseOrder_deliveryOrCompletion_FIELD`, `PMRpurchaseOrder_paymentMode_FIELD`, `PMRpurchaseOrder_sourceOfFunds_FIELD`, `PMRpurchaseOrder_abcTotal_FIELD`, `PMRpurchaseOrder_contractCostTotal_FIELD`, `PMRpurchaseOrder_constructorOrSupplier_FIELD`, `PMRpurchaseOrder_itemPurchase_FIELD`, `PMRpurchaseOrder_remarks_FIELD`, `PMR_id_FIELD`, `PMRpurchaseOrder_procActivityStatus_FIELD`, `EndUser_id_FIELD`) VALUES
(1, 'a', 'b                                        ', 'c                                        ', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', '2019-04-01', '2019-04-02', '3', '2019-04-04', 'd', 'm', 5, 6, '                          n              ', '', 'Awarded', 2, NULL, 39),
(2, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', '0000-00-00', '0000-00-00', '13', '0000-00-00', 'd', 'm', 1, 1, 'n', '', 'Awarded', 2, 'null', 21),
(4, 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', '2019-04-25', '2019-04-26', '27', '2019-04-28', 's', 'd', 29, 30, 'f', 'g    ', 'Delivered', 7, NULL, NULL),
(6, 'a', 'a                                        ', 'a                                        ', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', '0000-00-00', '0000-00-00', '1', '0000-00-00', 'a', 'a', 12, 11, 'a                                        ', 'a                                        ', 'Awarded', 5, 'COMPLETED', 21),
(7, 'z', 'x                                        ', 'c                                        ', 'v', 'b', 'n', 'm', 'l', 'k', 'j', 'h', '2019-04-23', '2019-04-24', '25', '2019-04-26', 'g', 'f', 27.5, 28, 'd', 's', 'Delivered', 2, 'null', NULL),
(8, '807', 'For Gender and Development use', 'GAD', 'Shopping', 'a', 'b', 'c', 'd', 'e', 'f', 'g', '2019-04-01', '2019-04-02', '30', '2019-04-03', 'Payment', 'GAA 101', 3573, 3573, 'JACG Gen. Mdse.', 'Assorted Groceries', 'Awarded', 5, 'ON-GOING', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `pmrs_table`
--

CREATE TABLE `pmrs_table` (
  `PMR_id_FIELD` int(11) NOT NULL,
  `PMR_timeScope_FIELD` varchar(20) NOT NULL,
  `PMR_year_FIELD` varchar(10) NOT NULL,
  `PMR_program_FIELD` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pmrs_table`
--

INSERT INTO `pmrs_table` (`PMR_id_FIELD`, `PMR_timeScope_FIELD`, `PMR_year_FIELD`, `PMR_program_FIELD`) VALUES
(2, '4th Quarter', '2019', 'ACAD'),
(5, '2nd Semester', '2022', 'UBAP'),
(7, '1st Quarter', '2018', 'RET');

-- --------------------------------------------------------

--
-- Table structure for table `ppmpitems_table`
--

CREATE TABLE `ppmpitems_table` (
  `PPMPItem_id_FIELD` int(11) NOT NULL,
  `Item_id_FIELD` int(11) NOT NULL,
  `PPMPItem_fstQtrQty_FIELD` decimal(10,0) NOT NULL DEFAULT '1',
  `PPMPItem_scdQtrQty_FIELD` decimal(10,0) NOT NULL DEFAULT '1',
  `PPMPItem_trdQtrQty_FIELD` decimal(10,0) NOT NULL DEFAULT '1',
  `PPMPItem_frtQtrQty_FIELD` decimal(10,0) NOT NULL DEFAULT '1',
  `PPMPItem_noteOrRemarks_FIELD` text,
  `PPMP_id_FIELD` int(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ppmpitems_table`
--

INSERT INTO `ppmpitems_table` (`PPMPItem_id_FIELD`, `Item_id_FIELD`, `PPMPItem_fstQtrQty_FIELD`, `PPMPItem_scdQtrQty_FIELD`, `PPMPItem_trdQtrQty_FIELD`, `PPMPItem_frtQtrQty_FIELD`, `PPMPItem_noteOrRemarks_FIELD`, `PPMP_id_FIELD`) VALUES
(1, 8, '1', '1', '1', '1', NULL, 1),
(2, 9, '1', '1', '1', '1', NULL, 1),
(3, 10, '1', '1', '1', '1', NULL, 1),
(4, 13, '1', '1', '1', '1', NULL, 1),
(5, 14, '1', '1', '1', '1', NULL, 1),
(6, 15, '1', '1', '1', '1', NULL, 1),
(7, 1, '1', '1', '1', '1', NULL, 2),
(8, 2, '1', '1', '1', '1', NULL, 2),
(9, 5, '1', '1', '1', '1', NULL, 2),
(10, 6, '1', '1', '1', '1', NULL, 2),
(11, 7, '1', '1', '1', '1', NULL, 2),
(12, 16, '1', '1', '1', '1', NULL, 2),
(13, 20, '1', '1', '1', '1', NULL, 2),
(14, 21, '1', '1', '1', '1', NULL, 2),
(15, 22, '1', '1', '1', '1', NULL, 2),
(16, 8, '1', '1', '1', '1', NULL, 3),
(17, 9, '1', '1', '1', '1', NULL, 3),
(18, 10, '1', '1', '1', '1', NULL, 3),
(19, 12, '1', '1', '1', '1', NULL, 3),
(20, 14, '1', '1', '1', '1', NULL, 3),
(21, 15, '1', '1', '1', '1', NULL, 3),
(22, 1, '1', '1', '1', '1', NULL, 19),
(23, 2, '1', '1', '1', '1', NULL, 19),
(24, 4, '1', '1', '1', '1', NULL, 19),
(25, 5, '1', '1', '1', '1', NULL, 19),
(26, 6, '1', '1', '1', '1', NULL, 19),
(27, 16, '1', '1', '1', '1', NULL, 19),
(28, 17, '1', '1', '1', '1', NULL, 19),
(29, 20, '1', '1', '1', '1', NULL, 19),
(30, 21, '1', '1', '1', '1', NULL, 19),
(31, 22, '1', '1', '1', '1', NULL, 19),
(32, 8, '1', '1', '1', '1', NULL, 4),
(33, 9, '1', '1', '1', '1', NULL, 4),
(34, 10, '1', '1', '1', '1', NULL, 4),
(35, 12, '1', '1', '1', '1', NULL, 4),
(36, 14, '1', '1', '1', '1', NULL, 4),
(37, 15, '1', '1', '1', '1', NULL, 4),
(38, 1, '1', '1', '1', '1', NULL, 20),
(39, 2, '1', '1', '1', '1', NULL, 20),
(40, 3, '1', '1', '1', '1', NULL, 20),
(41, 4, '1', '1', '1', '1', NULL, 20),
(42, 5, '1', '1', '1', '1', NULL, 20),
(43, 7, '1', '1', '1', '1', NULL, 20),
(44, 16, '1', '1', '1', '1', NULL, 20),
(45, 17, '1', '1', '1', '1', NULL, 20),
(46, 20, '1', '1', '1', '1', NULL, 20),
(47, 21, '1', '1', '1', '1', NULL, 20),
(48, 22, '1', '1', '1', '1', NULL, 20),
(49, 8, '1', '1', '1', '1', NULL, 5),
(50, 9, '1', '1', '1', '1', NULL, 5),
(51, 10, '1', '1', '1', '1', NULL, 5),
(52, 12, '1', '1', '1', '1', NULL, 5),
(53, 13, '1', '1', '1', '1', NULL, 5),
(54, 14, '1', '1', '1', '1', NULL, 5),
(55, 15, '1', '1', '1', '1', NULL, 5),
(56, 1, '1', '1', '1', '1', NULL, 21),
(57, 2, '1', '1', '1', '1', NULL, 21),
(58, 3, '1', '1', '1', '1', NULL, 21),
(59, 4, '1', '1', '1', '1', NULL, 21),
(60, 5, '1', '1', '1', '1', NULL, 21),
(61, 6, '1', '1', '1', '1', NULL, 21),
(62, 7, '1', '1', '1', '1', NULL, 21),
(63, 16, '1', '1', '1', '1', NULL, 21),
(64, 17, '1', '1', '1', '1', NULL, 21),
(65, 20, '1', '1', '1', '1', NULL, 21),
(66, 21, '1', '1', '1', '1', NULL, 21),
(67, 22, '1', '1', '1', '1', NULL, 21),
(68, 8, '1', '1', '1', '1', NULL, 6),
(69, 9, '1', '1', '1', '1', NULL, 6),
(70, 10, '1', '1', '1', '1', NULL, 6),
(71, 11, '1', '1', '1', '1', NULL, 6),
(72, 12, '1', '1', '1', '1', NULL, 6),
(73, 13, '1', '1', '1', '1', NULL, 6),
(74, 14, '1', '1', '1', '1', NULL, 6),
(75, 15, '1', '1', '1', '1', NULL, 6),
(76, 1, '1', '1', '1', '1', NULL, 22),
(77, 2, '1', '1', '1', '1', NULL, 22),
(78, 3, '1', '1', '1', '1', NULL, 22),
(79, 4, '1', '1', '1', '1', NULL, 22),
(80, 5, '1', '1', '1', '1', NULL, 22),
(81, 6, '1', '1', '1', '1', NULL, 22),
(82, 7, '1', '1', '1', '1', NULL, 22),
(83, 16, '1', '1', '1', '1', NULL, 22),
(84, 17, '1', '1', '1', '1', NULL, 22),
(85, 20, '1', '1', '1', '1', NULL, 22),
(86, 21, '1', '1', '1', '1', NULL, 22),
(87, 22, '1', '1', '1', '1', NULL, 22),
(88, 8, '1', '1', '1', '1', NULL, 7),
(89, 9, '1', '1', '1', '1', NULL, 7),
(90, 10, '1', '1', '1', '1', NULL, 7),
(91, 11, '1', '1', '1', '1', NULL, 7),
(92, 12, '1', '1', '1', '1', NULL, 7),
(93, 13, '1', '1', '1', '1', NULL, 7),
(94, 14, '1', '1', '1', '1', NULL, 7),
(95, 15, '1', '1', '1', '1', NULL, 7),
(96, 8, '6', '1', '1', '1', NULL, 8),
(97, 9, '1', '1', '1', '1', NULL, 8),
(98, 10, '1', '1', '1', '1', NULL, 8),
(99, 11, '1', '1', '1', '1', NULL, 8),
(100, 12, '1', '1', '1', '1', NULL, 8),
(101, 13, '1', '1', '1', '1', NULL, 8),
(102, 14, '1', '1', '1', '1', NULL, 8),
(103, 15, '1', '1', '1', '1', NULL, 8),
(104, 1, '1', '1', '1', '1', NULL, 24),
(105, 2, '1', '1', '1', '1', NULL, 24),
(106, 3, '1', '1', '1', '1', NULL, 24),
(107, 4, '1', '1', '1', '1', NULL, 24),
(108, 5, '1', '1', '1', '1', NULL, 24),
(109, 6, '1', '1', '1', '1', NULL, 24),
(110, 7, '1', '1', '1', '1', NULL, 24),
(111, 16, '1', '1', '1', '1', NULL, 24),
(112, 17, '1', '1', '1', '1', NULL, 24),
(113, 20, '1', '1', '1', '1', NULL, 24),
(114, 21, '1', '1', '1', '1', NULL, 24),
(115, 22, '1', '1', '1', '1', NULL, 24),
(116, 8, '1', '1', '1', '1', NULL, 9),
(117, 9, '1', '1', '1', '1', NULL, 9),
(118, 10, '1', '1', '1', '1', NULL, 9),
(119, 11, '1', '1', '1', '1', NULL, 9),
(120, 12, '1', '1', '1', '1', NULL, 9),
(121, 13, '1', '1', '1', '1', NULL, 9),
(122, 14, '1', '1', '1', '1', NULL, 9),
(123, 15, '1', '1', '1', '1', NULL, 9),
(124, 1, '1', '1', '1', '1', NULL, 25),
(125, 2, '1', '1', '1', '1', NULL, 25),
(126, 3, '1', '1', '1', '1', NULL, 25),
(127, 4, '1', '1', '1', '1', NULL, 25),
(128, 5, '1', '1', '1', '1', NULL, 25),
(129, 6, '1', '1', '1', '1', NULL, 25),
(130, 7, '1', '1', '1', '1', NULL, 25),
(131, 16, '1', '1', '1', '1', NULL, 25),
(132, 17, '1', '1', '1', '1', NULL, 25),
(133, 20, '1', '1', '1', '1', NULL, 25),
(134, 21, '1', '1', '1', '1', NULL, 25),
(135, 22, '1', '1', '1', '1', NULL, 25),
(136, 8, '1', '1', '1', '1', NULL, 10),
(137, 9, '1', '1', '1', '1', NULL, 10),
(138, 10, '1', '1', '1', '1', NULL, 10),
(139, 11, '1', '1', '1', '1', NULL, 10),
(140, 12, '1', '1', '1', '1', NULL, 10),
(141, 13, '1', '1', '1', '1', NULL, 10),
(142, 14, '1', '1', '1', '1', NULL, 10),
(143, 15, '1', '1', '1', '1', NULL, 10),
(144, 8, '1', '1', '1', '1', NULL, 11),
(145, 10, '1', '1', '1', '1', NULL, 11),
(146, 11, '1', '1', '1', '1', NULL, 11),
(147, 12, '1', '1', '1', '1', NULL, 11),
(148, 14, '1', '1', '1', '1', NULL, 11),
(149, 15, '1', '1', '1', '1', NULL, 11),
(150, 1, '1', '1', '1', '1', NULL, 27),
(151, 2, '1', '1', '1', '1', NULL, 27),
(152, 3, '1', '1', '1', '1', NULL, 27),
(153, 4, '1', '1', '1', '1', NULL, 27),
(154, 5, '1', '1', '1', '1', NULL, 27),
(155, 6, '1', '1', '1', '1', NULL, 27),
(156, 7, '1', '1', '1', '1', NULL, 27),
(157, 16, '1', '1', '1', '1', NULL, 27),
(158, 17, '1', '1', '1', '1', NULL, 27),
(159, 20, '1', '1', '1', '1', NULL, 27),
(160, 21, '1', '1', '1', '1', NULL, 27),
(161, 22, '1', '1', '1', '1', NULL, 27),
(162, 1, '1', '1', '1', '1', NULL, 28),
(163, 2, '1', '1', '1', '1', NULL, 28),
(164, 3, '1', '1', '1', '1', NULL, 28),
(165, 4, '1', '1', '1', '1', NULL, 28),
(166, 5, '1', '1', '1', '1', NULL, 28),
(167, 6, '1', '1', '1', '1', NULL, 28),
(168, 7, '1', '1', '1', '1', NULL, 28),
(169, 16, '1', '1', '1', '1', NULL, 28),
(170, 17, '1', '1', '1', '1', NULL, 28),
(171, 20, '1', '1', '1', '1', NULL, 28),
(172, 21, '1', '1', '1', '1', NULL, 28),
(173, 22, '1', '1', '1', '1', NULL, 28),
(174, 8, '1', '1', '1', '1', NULL, 13),
(175, 9, '1', '1', '1', '1', NULL, 13),
(176, 10, '1', '1', '1', '1', NULL, 13),
(177, 13, '1', '1', '1', '1', NULL, 13),
(178, 14, '1', '1', '1', '1', NULL, 13),
(179, 15, '1', '1', '1', '1', NULL, 13),
(180, 1, '1', '1', '1', '1', NULL, 29),
(181, 2, '1', '1', '1', '1', NULL, 29),
(182, 4, '1', '1', '1', '1', NULL, 29),
(183, 6, '1', '1', '1', '1', NULL, 29),
(184, 7, '1', '1', '1', '1', NULL, 29),
(185, 16, '1', '1', '1', '1', NULL, 29),
(186, 17, '1', '1', '1', '1', NULL, 29),
(187, 20, '1', '1', '1', '1', NULL, 29),
(188, 21, '1', '1', '1', '1', NULL, 29),
(189, 22, '1', '1', '1', '1', NULL, 29),
(190, 8, '1', '1', '1', '1', NULL, 14),
(191, 9, '1', '1', '1', '1', NULL, 14),
(192, 11, '1', '1', '1', '1', NULL, 14),
(193, 12, '1', '1', '1', '1', NULL, 14),
(194, 14, '1', '1', '1', '1', NULL, 14),
(195, 15, '1', '1', '1', '1', NULL, 14),
(196, 8, '1', '1', '1', '1', NULL, 15),
(197, 9, '1', '1', '1', '1', NULL, 15),
(198, 11, '1', '1', '1', '1', NULL, 15),
(199, 12, '1', '1', '1', '1', NULL, 15),
(200, 14, '1', '1', '1', '1', NULL, 15),
(201, 15, '1', '1', '1', '1', NULL, 15),
(202, 1, '1', '1', '1', '1', NULL, 31),
(203, 2, '1', '1', '1', '1', NULL, 31),
(204, 3, '1', '1', '1', '1', NULL, 31),
(205, 5, '1', '1', '1', '1', NULL, 31),
(206, 6, '1', '1', '1', '1', NULL, 31),
(207, 7, '1', '1', '1', '1', NULL, 31),
(208, 16, '1', '1', '1', '1', NULL, 31),
(209, 17, '1', '1', '1', '1', NULL, 31),
(210, 20, '1', '1', '1', '1', NULL, 31),
(211, 21, '1', '1', '1', '1', NULL, 31),
(212, 22, '1', '1', '1', '1', NULL, 31),
(213, 8, '1', '1', '1', '1', NULL, 16),
(214, 9, '1', '1', '1', '1', NULL, 16),
(215, 10, '1', '1', '1', '1', NULL, 16),
(216, 12, '1', '1', '1', '1', NULL, 16),
(217, 13, '1', '1', '1', '1', NULL, 16),
(218, 15, '1', '1', '1', '1', NULL, 16),
(219, 1, '9', '1', '1', '1', 'null', 32),
(220, 2, '1', '1', '1', '1', NULL, 32),
(221, 3, '1', '1', '1', '1', NULL, 32),
(222, 5, '1', '1', '1', '1', NULL, 32),
(223, 7, '1', '1', '1', '1', NULL, 32),
(224, 16, '1', '1', '1', '1', NULL, 32),
(225, 17, '1', '1', '1', '1', NULL, 32),
(226, 20, '1', '1', '1', '1', NULL, 32),
(227, 21, '1', '1', '1', '1', NULL, 32),
(228, 22, '1', '1', '1', '1', NULL, 32),
(229, 8, '1', '1', '1', '1', NULL, 17),
(230, 9, '1', '1', '1', '1', NULL, 17),
(231, 10, '1', '1', '1', '1', NULL, 17),
(232, 12, '1', '1', '1', '1', NULL, 17),
(233, 13, '1', '1', '1', '1', NULL, 17),
(234, 15, '1', '1', '1', '1', NULL, 17),
(235, 1, '1', '1', '1', '1', NULL, 33),
(236, 2, '1', '1', '1', '1', NULL, 33),
(237, 4, '1', '1', '1', '1', NULL, 33),
(238, 5, '1', '1', '1', '1', NULL, 33),
(239, 7, '1', '1', '1', '1', NULL, 33),
(240, 16, '1', '1', '1', '1', NULL, 33),
(241, 17, '1', '1', '1', '1', NULL, 33),
(242, 20, '1', '1', '1', '1', NULL, 33),
(243, 21, '1', '1', '1', '1', NULL, 33),
(244, 22, '1', '1', '1', '1', NULL, 33),
(245, 8, '1', '1', '1', '1', NULL, 18),
(246, 9, '1', '1', '1', '1', NULL, 18),
(247, 10, '1', '1', '1', '1', NULL, 18),
(248, 12, '1', '1', '1', '1', NULL, 18),
(249, 13, '1', '1', '1', '1', NULL, 18),
(250, 15, '1', '1', '1', '1', NULL, 18),
(251, 1, '1', '1', '1', '1', NULL, 34),
(252, 2, '1', '1', '1', '1', NULL, 34),
(253, 4, '1', '1', '1', '1', NULL, 34),
(254, 5, '1', '1', '1', '1', NULL, 34),
(255, 7, '1', '1', '1', '1', NULL, 34),
(256, 16, '1', '1', '1', '1', NULL, 34),
(257, 17, '1', '1', '1', '1', NULL, 34),
(258, 20, '1', '1', '1', '1', NULL, 34),
(259, 21, '1', '1', '1', '1', NULL, 34),
(260, 22, '1', '1', '1', '1', NULL, 34),
(261, 8, '1', '1', '1', '1', NULL, 35),
(262, 9, '1', '1', '1', '1', NULL, 35),
(263, 10, '1', '1', '1', '1', NULL, 35),
(264, 11, '1', '1', '1', '1', NULL, 35),
(265, 12, '1', '1', '1', '1', NULL, 35),
(266, 14, '1', '1', '1', '1', NULL, 35),
(267, 15, '1', '1', '1', '1', NULL, 35),
(268, 8, '1', '1', '1', '1', NULL, 36),
(269, 9, '1', '1', '1', '1', NULL, 36),
(270, 10, '1', '1', '1', '1', NULL, 36),
(271, 11, '1', '1', '1', '1', NULL, 36),
(272, 14, '1', '1', '1', '1', NULL, 36),
(273, 15, '1', '1', '1', '1', NULL, 36),
(274, 1, '1', '1', '1', '1', NULL, 53),
(275, 2, '1', '1', '1', '1', NULL, 53),
(276, 3, '1', '1', '1', '1', NULL, 53),
(277, 4, '1', '1', '1', '1', NULL, 53),
(278, 5, '1', '1', '1', '1', NULL, 53),
(279, 7, '1', '1', '1', '1', NULL, 53),
(280, 16, '1', '1', '1', '1', NULL, 53),
(281, 17, '1', '1', '1', '1', NULL, 53),
(282, 20, '1', '1', '1', '1', NULL, 53),
(283, 21, '1', '1', '1', '1', NULL, 53),
(284, 22, '1', '1', '1', '1', NULL, 53),
(285, 8, '1', '1', '1', '1', NULL, 37),
(286, 9, '1', '1', '1', '1', NULL, 37),
(287, 10, '1', '1', '1', '1', NULL, 37),
(288, 12, '1', '1', '1', '1', NULL, 37),
(289, 13, '1', '1', '1', '1', NULL, 37),
(290, 14, '1', '1', '1', '1', NULL, 37),
(291, 15, '1', '1', '1', '1', NULL, 37),
(292, 1, '1', '1', '1', '1', NULL, 54),
(293, 2, '1', '1', '1', '1', NULL, 54),
(294, 3, '1', '1', '1', '1', NULL, 54),
(295, 4, '1', '1', '1', '1', NULL, 54),
(296, 6, '1', '1', '1', '1', NULL, 54),
(297, 7, '1', '1', '1', '1', NULL, 54),
(298, 16, '1', '1', '1', '1', NULL, 54),
(299, 17, '1', '1', '1', '1', NULL, 54),
(300, 20, '1', '1', '1', '1', NULL, 54),
(301, 21, '1', '1', '1', '1', NULL, 54),
(302, 22, '1', '1', '1', '1', NULL, 54),
(303, 8, '1', '1', '1', '1', NULL, 38),
(304, 9, '1', '1', '1', '1', NULL, 38),
(305, 10, '1', '1', '1', '1', NULL, 38),
(306, 11, '1', '1', '1', '1', NULL, 38),
(307, 13, '1', '1', '1', '1', NULL, 38),
(308, 14, '1', '1', '1', '1', NULL, 38),
(309, 15, '1', '1', '1', '1', NULL, 38),
(310, 1, '1', '1', '1', '1', NULL, 55),
(311, 2, '1', '1', '1', '1', NULL, 55),
(312, 3, '1', '1', '1', '1', NULL, 55),
(313, 4, '1', '1', '1', '1', NULL, 55),
(314, 5, '1', '1', '1', '1', NULL, 55),
(315, 6, '1', '1', '1', '1', NULL, 55),
(316, 16, '1', '1', '1', '1', NULL, 55),
(317, 17, '1', '1', '1', '1', NULL, 55),
(318, 20, '1', '1', '1', '1', NULL, 55),
(319, 21, '1', '1', '1', '1', NULL, 55),
(320, 22, '1', '1', '1', '1', NULL, 55),
(321, 8, '1', '1', '1', '1', NULL, 39),
(322, 9, '1', '1', '1', '1', NULL, 39),
(323, 10, '1', '1', '1', '1', NULL, 39),
(324, 11, '1', '1', '1', '1', NULL, 39),
(325, 13, '1', '1', '1', '1', NULL, 39),
(326, 14, '1', '1', '1', '1', NULL, 39),
(327, 15, '1', '1', '1', '1', NULL, 39),
(328, 1, '1', '1', '1', '1', NULL, 56),
(329, 2, '1', '1', '1', '1', NULL, 56),
(330, 4, '1', '1', '1', '1', NULL, 56),
(331, 5, '1', '1', '1', '1', NULL, 56),
(332, 6, '1', '1', '1', '1', NULL, 56),
(333, 7, '1', '1', '1', '1', NULL, 56),
(334, 16, '1', '1', '1', '1', NULL, 56),
(335, 17, '1', '1', '1', '1', NULL, 56),
(336, 20, '1', '1', '1', '1', NULL, 56),
(337, 21, '1', '1', '1', '1', NULL, 56),
(338, 22, '1', '1', '1', '1', NULL, 56),
(339, 8, '1', '1', '1', '1', NULL, 40),
(340, 9, '1', '1', '1', '1', NULL, 40),
(341, 10, '1', '1', '1', '1', NULL, 40),
(342, 11, '1', '1', '1', '1', NULL, 40),
(343, 13, '1', '1', '1', '1', NULL, 40),
(344, 14, '1', '1', '1', '1', NULL, 40),
(345, 15, '1', '1', '1', '1', NULL, 40),
(346, 1, '1', '1', '1', '1', NULL, 57),
(347, 2, '1', '1', '1', '1', NULL, 57),
(348, 4, '1', '1', '1', '1', NULL, 57),
(349, 5, '1', '1', '1', '1', NULL, 57),
(350, 6, '1', '1', '1', '1', NULL, 57),
(351, 7, '1', '1', '1', '1', NULL, 57),
(352, 16, '1', '1', '1', '1', NULL, 57),
(353, 17, '1', '1', '1', '1', NULL, 57),
(354, 20, '1', '1', '1', '1', NULL, 57),
(355, 21, '1', '1', '1', '1', NULL, 57),
(356, 22, '1', '1', '1', '1', NULL, 57),
(357, 8, '1', '1', '1', '1', NULL, 41),
(358, 9, '1', '1', '1', '1', NULL, 41),
(359, 11, '1', '1', '1', '1', NULL, 41),
(360, 14, '1', '1', '1', '1', NULL, 41),
(361, 15, '1', '1', '1', '1', NULL, 41),
(362, 1, '1', '1', '1', '1', NULL, 58),
(363, 2, '1', '1', '1', '1', NULL, 58),
(364, 3, '1', '1', '1', '1', NULL, 58),
(365, 4, '1', '1', '1', '1', NULL, 58),
(366, 6, '1', '1', '1', '1', NULL, 58),
(367, 7, '1', '1', '1', '1', NULL, 58),
(368, 16, '1', '1', '1', '1', NULL, 58),
(369, 17, '1', '1', '1', '1', NULL, 58),
(370, 20, '1', '1', '1', '1', NULL, 58),
(371, 21, '1', '1', '1', '1', NULL, 58),
(372, 22, '1', '1', '1', '1', NULL, 58),
(373, 8, '1', '1', '1', '1', NULL, 42),
(374, 9, '1', '1', '1', '1', NULL, 42),
(375, 10, '1', '1', '1', '1', NULL, 42),
(376, 11, '1', '1', '1', '1', NULL, 42),
(377, 13, '1', '1', '1', '1', NULL, 42),
(378, 14, '1', '1', '1', '1', NULL, 42),
(379, 15, '1', '1', '1', '1', NULL, 42),
(380, 1, '1', '1', '1', '1', NULL, 59),
(381, 2, '1', '1', '1', '1', NULL, 59),
(382, 3, '1', '1', '1', '1', NULL, 59),
(383, 6, '1', '1', '1', '1', NULL, 59),
(384, 7, '1', '1', '1', '1', NULL, 59),
(385, 16, '1', '1', '1', '1', NULL, 59),
(386, 17, '1', '1', '1', '1', NULL, 59),
(387, 20, '1', '1', '1', '1', NULL, 59),
(388, 21, '1', '1', '1', '1', NULL, 59),
(389, 22, '1', '1', '1', '1', NULL, 59),
(390, 8, '1', '1', '1', '1', NULL, 43),
(391, 9, '1', '1', '1', '1', NULL, 43),
(392, 10, '1', '1', '1', '1', NULL, 43),
(393, 11, '1', '1', '1', '1', NULL, 43),
(394, 13, '1', '1', '1', '1', NULL, 43),
(395, 14, '1', '1', '1', '1', NULL, 43),
(396, 15, '1', '1', '1', '1', NULL, 43),
(397, 1, '1', '1', '1', '1', NULL, 60),
(398, 2, '1', '1', '1', '1', NULL, 60),
(399, 4, '1', '1', '1', '1', NULL, 60),
(400, 5, '1', '1', '1', '1', NULL, 60),
(401, 7, '1', '1', '1', '1', NULL, 60),
(402, 16, '1', '1', '1', '1', NULL, 60),
(403, 17, '1', '1', '1', '1', NULL, 60),
(404, 20, '1', '1', '1', '1', NULL, 60),
(405, 21, '1', '1', '1', '1', NULL, 60),
(406, 22, '1', '1', '1', '1', NULL, 60),
(407, 8, '1', '1', '1', '1', NULL, 44),
(408, 9, '1', '1', '1', '1', NULL, 44),
(409, 11, '1', '1', '1', '1', NULL, 44),
(410, 12, '1', '1', '1', '1', NULL, 44),
(411, 13, '1', '1', '1', '1', NULL, 44),
(412, 14, '1', '1', '1', '1', NULL, 44),
(413, 15, '1', '1', '1', '1', NULL, 44),
(414, 1, '1', '1', '1', '1', NULL, 61),
(415, 2, '1', '1', '1', '1', NULL, 61),
(416, 4, '1', '1', '1', '1', NULL, 61),
(417, 5, '1', '1', '1', '1', NULL, 61),
(418, 6, '1', '1', '1', '1', NULL, 61),
(419, 7, '1', '1', '1', '1', NULL, 61),
(420, 16, '1', '1', '1', '1', NULL, 61),
(421, 17, '1', '1', '1', '1', NULL, 61),
(422, 20, '1', '1', '1', '1', NULL, 61),
(423, 21, '1', '1', '1', '1', NULL, 61),
(424, 22, '1', '1', '1', '1', NULL, 61),
(425, 8, '1', '1', '1', '1', NULL, 45),
(426, 9, '1', '1', '1', '1', NULL, 45),
(427, 10, '1', '1', '1', '1', NULL, 45),
(428, 11, '1', '1', '1', '1', NULL, 45),
(429, 13, '1', '1', '1', '1', NULL, 45),
(430, 14, '1', '1', '1', '1', NULL, 45),
(431, 15, '1', '1', '1', '1', NULL, 45),
(432, 1, '1', '1', '1', '1', NULL, 62),
(433, 2, '1', '1', '1', '1', NULL, 62),
(434, 4, '1', '1', '1', '1', NULL, 62),
(435, 5, '1', '1', '1', '1', NULL, 62),
(436, 6, '1', '1', '1', '1', NULL, 62),
(437, 7, '1', '1', '1', '1', NULL, 62),
(438, 16, '1', '1', '1', '1', NULL, 62),
(439, 17, '1', '1', '1', '1', NULL, 62),
(440, 20, '1', '1', '1', '1', NULL, 62),
(441, 21, '1', '1', '1', '1', NULL, 62),
(442, 22, '1', '1', '1', '1', NULL, 62),
(443, 8, '1', '1', '1', '1', NULL, 46),
(444, 10, '1', '1', '1', '1', NULL, 46),
(445, 11, '1', '1', '1', '1', NULL, 46),
(446, 12, '1', '1', '1', '1', NULL, 46),
(447, 14, '1', '1', '1', '1', NULL, 46),
(448, 15, '1', '1', '1', '1', NULL, 46),
(449, 1, '1', '1', '1', '1', NULL, 63),
(450, 2, '1', '1', '1', '1', NULL, 63),
(451, 3, '1', '1', '1', '1', NULL, 63),
(452, 4, '1', '1', '1', '1', NULL, 63),
(453, 6, '1', '1', '1', '1', NULL, 63),
(454, 7, '1', '1', '1', '1', NULL, 63),
(455, 16, '1', '1', '1', '1', NULL, 63),
(456, 17, '1', '1', '1', '1', NULL, 63),
(457, 20, '1', '1', '1', '1', NULL, 63),
(458, 21, '1', '1', '1', '1', NULL, 63),
(459, 22, '1', '1', '1', '1', NULL, 63),
(460, 8, '1', '1', '1', '1', NULL, 47),
(461, 9, '1', '1', '1', '1', NULL, 47),
(462, 10, '1', '1', '1', '1', NULL, 47),
(463, 12, '1', '1', '1', '1', NULL, 47),
(464, 13, '1', '1', '1', '1', NULL, 47),
(465, 14, '1', '1', '1', '1', NULL, 47),
(466, 15, '1', '1', '1', '1', NULL, 47),
(467, 1, '1', '1', '1', '1', NULL, 64),
(468, 2, '1', '1', '1', '1', NULL, 64),
(469, 3, '1', '1', '1', '1', NULL, 64),
(470, 5, '1', '1', '1', '1', NULL, 64),
(471, 6, '1', '1', '1', '1', NULL, 64),
(472, 7, '1', '1', '1', '1', NULL, 64),
(473, 16, '1', '1', '1', '1', NULL, 64),
(474, 17, '1', '1', '1', '1', NULL, 64),
(475, 20, '1', '1', '1', '1', NULL, 64),
(476, 21, '1', '1', '1', '1', NULL, 64),
(477, 22, '1', '1', '1', '1', NULL, 64),
(478, 8, '1', '1', '1', '1', NULL, 48),
(479, 9, '1', '1', '1', '1', NULL, 48),
(480, 10, '1', '1', '1', '1', NULL, 48),
(481, 11, '1', '1', '1', '1', NULL, 48),
(482, 14, '1', '1', '1', '1', NULL, 48),
(483, 15, '1', '1', '1', '1', NULL, 48),
(484, 1, '1', '1', '1', '1', NULL, 65),
(485, 4, '1', '1', '1', '1', NULL, 65),
(486, 5, '1', '1', '1', '1', NULL, 65),
(487, 6, '1', '1', '1', '1', NULL, 65),
(488, 7, '1', '1', '1', '1', NULL, 65),
(489, 16, '1', '1', '1', '1', NULL, 65),
(490, 17, '1', '1', '1', '1', NULL, 65),
(491, 20, '1', '1', '1', '1', NULL, 65),
(492, 21, '1', '1', '1', '1', NULL, 65),
(493, 22, '1', '1', '1', '1', NULL, 65),
(494, 8, '1', '1', '1', '1', NULL, 49),
(495, 9, '1', '1', '1', '1', NULL, 49),
(496, 10, '1', '1', '1', '1', NULL, 49),
(497, 11, '1', '1', '1', '1', NULL, 49),
(498, 14, '1', '1', '1', '1', NULL, 49),
(499, 15, '1', '1', '1', '1', NULL, 49),
(500, 1, '1', '1', '1', '1', NULL, 66),
(501, 2, '1', '1', '1', '1', NULL, 66),
(502, 3, '1', '1', '1', '1', NULL, 66),
(503, 5, '1', '1', '1', '1', NULL, 66),
(504, 7, '1', '1', '1', '1', NULL, 66),
(505, 16, '1', '1', '1', '1', NULL, 66),
(506, 17, '1', '1', '1', '1', NULL, 66),
(507, 20, '1', '1', '1', '1', NULL, 66),
(508, 21, '1', '1', '1', '1', NULL, 66),
(509, 22, '1', '1', '1', '1', NULL, 66),
(510, 8, '1', '1', '1', '1', NULL, 50),
(511, 9, '1', '1', '1', '1', NULL, 50),
(512, 10, '1', '1', '1', '1', NULL, 50),
(513, 11, '1', '1', '1', '1', NULL, 50),
(514, 12, '1', '1', '1', '1', NULL, 50),
(515, 14, '1', '1', '1', '1', NULL, 50),
(516, 15, '1', '1', '1', '1', NULL, 50),
(517, 1, '1', '1', '1', '1', NULL, 67),
(518, 2, '1', '1', '1', '1', NULL, 67),
(519, 3, '1', '1', '1', '1', NULL, 67),
(520, 4, '1', '1', '1', '1', NULL, 67),
(521, 5, '1', '1', '1', '1', NULL, 67),
(522, 6, '1', '1', '1', '1', NULL, 67),
(523, 7, '1', '1', '1', '1', NULL, 67),
(524, 16, '1', '1', '1', '1', NULL, 67),
(525, 17, '1', '1', '1', '1', NULL, 67),
(526, 20, '1', '1', '1', '1', NULL, 67),
(527, 21, '1', '1', '1', '1', NULL, 67),
(528, 22, '1', '1', '1', '1', NULL, 67),
(529, 8, '1', '1', '1', '1', NULL, 51),
(530, 9, '1', '1', '1', '1', NULL, 51),
(531, 10, '1', '1', '1', '1', NULL, 51),
(532, 12, '1', '1', '1', '1', NULL, 51),
(533, 13, '1', '1', '1', '1', NULL, 51),
(534, 14, '1', '1', '1', '1', NULL, 51),
(535, 15, '1', '1', '1', '1', NULL, 51),
(536, 1, '1', '1', '1', '1', NULL, 68),
(537, 2, '1', '1', '1', '1', NULL, 68),
(538, 3, '1', '1', '1', '1', NULL, 68),
(539, 4, '1', '1', '1', '1', NULL, 68),
(540, 6, '1', '1', '1', '1', NULL, 68),
(541, 7, '1', '1', '1', '1', NULL, 68),
(542, 16, '1', '1', '1', '1', NULL, 68),
(543, 17, '1', '1', '1', '1', NULL, 68),
(544, 20, '1', '1', '1', '1', NULL, 68),
(545, 21, '1', '1', '1', '1', NULL, 68),
(546, 22, '1', '1', '1', '1', NULL, 68),
(547, 1, '1', '1', '1', '1', NULL, 52),
(548, 2, '1', '1', '1', '1', NULL, 52),
(549, 3, '1', '1', '1', '1', NULL, 52),
(550, 4, '1', '1', '1', '1', NULL, 52),
(551, 5, '1', '1', '1', '1', NULL, 52),
(552, 6, '1', '1', '1', '1', NULL, 52),
(553, 7, '1', '1', '1', '1', NULL, 52),
(554, 16, '1', '1', '1', '1', NULL, 52),
(555, 17, '1', '1', '1', '1', NULL, 52),
(556, 20, '1', '1', '1', '1', NULL, 52),
(557, 21, '1', '1', '1', '1', NULL, 52),
(558, 22, '1', '1', '1', '1', NULL, 52),
(567, 1, '1', '1', '1', '1', NULL, 105),
(568, 2, '1', '1', '1', '1', NULL, 105),
(569, 4, '1', '1', '1', '1', NULL, 105),
(570, 5, '1', '1', '1', '1', NULL, 105),
(571, 6, '1', '1', '1', '1', NULL, 105),
(572, 7, '1', '1', '1', '1', NULL, 105),
(573, 16, '1', '1', '1', '1', NULL, 105),
(574, 17, '1', '1', '1', '1', NULL, 105),
(575, 20, '1', '1', '1', '1', NULL, 105),
(576, 21, '1', '1', '1', '1', NULL, 105),
(577, 22, '1', '1', '1', '1', NULL, 105),
(578, 1, '1', '1', '1', '1', NULL, 104),
(579, 2, '1', '1', '1', '1', NULL, 104),
(580, 3, '1', '1', '1', '1', NULL, 104),
(581, 5, '1', '1', '1', '1', NULL, 104),
(582, 6, '1', '1', '1', '1', NULL, 104),
(583, 7, '1', '1', '1', '1', NULL, 104),
(584, 16, '1', '1', '1', '1', NULL, 104),
(585, 17, '1', '1', '1', '1', NULL, 104),
(586, 20, '1', '1', '1', '1', NULL, 104),
(587, 21, '1', '1', '1', '1', NULL, 104),
(588, 22, '1', '1', '1', '1', NULL, 104),
(589, 8, '1', '1', '1', '1', NULL, 85),
(590, 9, '1', '1', '1', '1', NULL, 85),
(591, 10, '1', '1', '1', '1', NULL, 85),
(592, 12, '1', '1', '1', '1', NULL, 85),
(593, 13, '1', '1', '1', '1', NULL, 85),
(594, 14, '1', '1', '1', '1', NULL, 85),
(595, 15, '1', '1', '1', '1', NULL, 85),
(596, 8, '1', '1', '1', '1', NULL, 84),
(597, 9, '1', '1', '1', '1', NULL, 84),
(598, 11, '1', '1', '1', '1', NULL, 84),
(599, 12, '1', '1', '1', '1', NULL, 84),
(600, 13, '1', '1', '1', '1', NULL, 84),
(601, 14, '1', '1', '1', '1', NULL, 84),
(602, 15, '1', '1', '1', '1', NULL, 84),
(603, 1, '1', '1', '1', '1', NULL, 100),
(604, 2, '1', '1', '1', '1', NULL, 100),
(605, 4, '1', '1', '1', '1', NULL, 100),
(606, 5, '1', '1', '1', '1', NULL, 100),
(607, 7, '1', '1', '1', '1', NULL, 100),
(608, 16, '1', '1', '1', '1', NULL, 100),
(609, 17, '1', '1', '1', '1', NULL, 100),
(610, 20, '1', '1', '1', '1', NULL, 100),
(611, 22, '1', '1', '1', '1', NULL, 100),
(612, 8, '1', '1', '1', '1', NULL, 82),
(613, 9, '1', '1', '1', '1', NULL, 82),
(614, 10, '1', '1', '1', '1', NULL, 82),
(615, 11, '1', '1', '1', '1', NULL, 82),
(616, 12, '1', '1', '1', '1', NULL, 82),
(617, 13, '1', '1', '1', '1', NULL, 82),
(618, 14, '1', '1', '1', '1', NULL, 82),
(619, 15, '1', '1', '1', '1', NULL, 82),
(620, 1, '1', '1', '1', '1', NULL, 99),
(621, 2, '1', '1', '1', '1', NULL, 99),
(622, 3, '1', '1', '1', '1', NULL, 99),
(623, 5, '1', '1', '1', '1', NULL, 99),
(624, 6, '1', '1', '1', '1', NULL, 99),
(625, 7, '1', '1', '1', '1', NULL, 99),
(626, 16, '1', '1', '1', '1', NULL, 99),
(627, 17, '1', '1', '1', '1', NULL, 99),
(628, 20, '1', '1', '1', '1', NULL, 99),
(629, 21, '1', '1', '1', '1', NULL, 99),
(630, 22, '1', '1', '1', '1', NULL, 99),
(631, 8, '1', '1', '1', '1', NULL, 81),
(632, 9, '1', '1', '1', '1', NULL, 81),
(633, 10, '1', '1', '1', '1', NULL, 81),
(634, 12, '1', '1', '1', '1', NULL, 81),
(635, 13, '1', '1', '1', '1', NULL, 81),
(636, 14, '1', '1', '1', '1', NULL, 81),
(637, 15, '1', '1', '1', '1', NULL, 81),
(638, 8, '1', '1', '1', '1', NULL, 87),
(639, 14, '1', '1', '1', '1', NULL, 87),
(640, 15, '1', '1', '1', '1', NULL, 87),
(641, 1, '1', '1', '1', '1', NULL, 30),
(642, 2, '1', '1', '1', '1', NULL, 30),
(643, 5, '1', '1', '1', '1', NULL, 30),
(644, 6, '1', '1', '1', '1', NULL, 30),
(645, 7, '1', '1', '1', '1', NULL, 30),
(646, 16, '1', '1', '1', '1', NULL, 30),
(647, 17, '1', '1', '1', '1', NULL, 30),
(648, 20, '1', '1', '1', '1', NULL, 30),
(649, 21, '1', '1', '1', '1', NULL, 30),
(650, 22, '1', '1', '1', '1', NULL, 30),
(651, 8, '7', '1', '1', '1', 'null', 107),
(652, 9, '1', '1', '1', '1', NULL, 107),
(653, 10, '1', '1', '1', '1', NULL, 107),
(654, 12, '1', '1', '1', '1', NULL, 107),
(655, 13, '1', '1', '1', '1', NULL, 107),
(656, 14, '1', '1', '1', '1', NULL, 107),
(657, 15, '1', '1', '1', '1', NULL, 107),
(658, 1, '2', '1', '1', '1', 'null', 108),
(659, 2, '1', '1', '1', '1', NULL, 108),
(660, 4, '1', '1', '1', '1', NULL, 108),
(661, 5, '1', '1', '1', '1', NULL, 108),
(662, 6, '1', '1', '1', '1', NULL, 108),
(663, 7, '1', '1', '1', '1', NULL, 108),
(664, 16, '1', '1', '1', '1', NULL, 108),
(665, 17, '1', '1', '1', '1', NULL, 108),
(666, 20, '1', '1', '1', '1', NULL, 108),
(667, 21, '1', '1', '1', '1', NULL, 108),
(668, 22, '1', '1', '1', '1', NULL, 108),
(669, 8, '1', '1', '1', '1', NULL, 109),
(670, 9, '1', '1', '1', '1', NULL, 109),
(671, 10, '1', '1', '1', '1', NULL, 109),
(672, 12, '1', '1', '1', '1', NULL, 109),
(673, 13, '1', '1', '1', '1', NULL, 109),
(674, 14, '1', '1', '1', '1', NULL, 109),
(675, 15, '1', '1', '1', '1', NULL, 109),
(676, 1, '2', '1', '1', '1', 'null', 110),
(677, 2, '1', '1', '1', '1', NULL, 110),
(678, 21, '1', '1', '2', '1', 'null', 110),
(679, 22, '1', '1', '1', '1', NULL, 110),
(680, 8, '1', '1', '1', '1', NULL, 111),
(681, 9, '1', '1', '1', '1', NULL, 111),
(682, 10, '1', '1', '1', '1', NULL, 111),
(683, 13, '1', '1', '1', '1', NULL, 111),
(684, 14, '1', '1', '1', '1', NULL, 111),
(685, 15, '1', '1', '1', '1', NULL, 111),
(686, 8, '13', '1', '3', '1', 'null', 112),
(687, 8, '1', '2', '3', '4', '', 113),
(688, 11, '3', '1', '1', '1', 'null', 37),
(689, 8, '1', '1', '1', '1', NULL, 122),
(690, 10, '1', '1', '1', '1', NULL, 122),
(691, 11, '1', '1', '1', '1', NULL, 122),
(692, 12, '1', '1', '1', '1', NULL, 122),
(693, 13, '1', '1', '1', '1', NULL, 122),
(694, 14, '1', '1', '1', '1', NULL, 122),
(695, 15, '1', '1', '1', '1', NULL, 122),
(696, 1, '1', '1', '1', '1', NULL, 123),
(697, 2, '1', '1', '1', '1', NULL, 123),
(698, 3, '1', '1', '1', '1', NULL, 123),
(700, 5, '1', '1', '1', '1', NULL, 123),
(701, 6, '1', '1', '1', '1', NULL, 123),
(702, 7, '1', '1', '1', '1', NULL, 123),
(703, 16, '1', '1', '1', '1', NULL, 123),
(704, 17, '1', '1', '1', '1', NULL, 123),
(705, 20, '1', '1', '1', '1', NULL, 123),
(706, 21, '1', '1', '1', '1', NULL, 123),
(707, 22, '1', '1', '1', '1', NULL, 123),
(708, 4, '1', '1', '1', '1', NULL, 123),
(710, 9, '1', '1', '1', '1', NULL, 125),
(711, 10, '1', '1', '1', '1', NULL, 125),
(712, 11, '1', '1', '1', '1', NULL, 125),
(713, 12, '1', '1', '1', '1', NULL, 125),
(714, 13, '1', '1', '1', '1', NULL, 125),
(716, 15, '1', '1', '1', '1', NULL, 125),
(717, 1, '1', '1', '1', '1', NULL, 126),
(718, 3, '1', '1', '1', '1', NULL, 126),
(719, 5, '1', '1', '1', '1', NULL, 126),
(721, 9, '1', '1', '1', '1', NULL, 128),
(722, 10, '1', '1', '1', '1', NULL, 128),
(723, 11, '1', '1', '1', '1', NULL, 128),
(724, 12, '1', '1', '1', '1', NULL, 128),
(725, 13, '1', '1', '1', '1', NULL, 128),
(726, 14, '1', '1', '1', '1', NULL, 128),
(727, 15, '1', '1', '1', '1', NULL, 128),
(728, 8, '1', '1', '1', '1', NULL, 116),
(729, 8, '1', '1', '1', '1', NULL, 130),
(730, 9, '1', '1', '1', '1', NULL, 130),
(731, 12, '1', '1', '1', '1', NULL, 130),
(732, 13, '1', '1', '1', '1', NULL, 130),
(733, 15, '1', '1', '1', '1', NULL, 130),
(734, 1, '1', '1', '1', '1', NULL, 131),
(735, 2, '1', '1', '1', '1', NULL, 131),
(736, 5, '1', '1', '1', '1', NULL, 131),
(737, 6, '1', '1', '1', '1', NULL, 131),
(738, 7, '1', '1', '1', '1', NULL, 131),
(739, 17, '1', '1', '1', '1', NULL, 131),
(740, 20, '1', '1', '1', '1', NULL, 131),
(741, 21, '1', '1', '1', '1', NULL, 131),
(742, 22, '1', '1', '1', '1', NULL, 131),
(743, 8, '1', '1', '1', '1', NULL, 129),
(744, 9, '1', '1', '1', '1', NULL, 129),
(745, 10, '1', '1', '7', '1', 'null', 129),
(746, 11, '1', '1', '1', '1', NULL, 129),
(747, 12, '1', '1', '1', '1', NULL, 129),
(748, 14, '1', '1', '1', '1', NULL, 129),
(749, 15, '1', '1', '1', '1', NULL, 129),
(750, 8, '1', '1', '1', '1', NULL, 132),
(751, 9, '1', '1', '1', '1', NULL, 132),
(752, 15, '1', '1', '1', '1', NULL, 132),
(753, 10, '1', '1', '1', '1', NULL, 132),
(770, 10, '1', '1', '1', '1', NULL, 136),
(771, 11, '1', '1', '1', '1', NULL, 136),
(772, 12, '1', '1', '1', '1', NULL, 136),
(773, 8, '1', '1', '1', '1', NULL, 143),
(774, 9, '1', '1', '1', '1', NULL, 143),
(775, 10, '1', '1', '1', '1', NULL, 143),
(776, 11, '1', '1', '1', '1', NULL, 143),
(777, 14, '1', '1', '1', '1', NULL, 143),
(778, 15, '1', '1', '1', '1', NULL, 143),
(779, 8, '1', '1', '1', '1', NULL, 144),
(780, 9, '1', '1', '1', '1', NULL, 144),
(781, 10, '1', '1', '1', '1', NULL, 144),
(782, 12, '1', '1', '1', '1', NULL, 144),
(783, 13, '1', '1', '1', '1', NULL, 144),
(784, 14, '1', '1', '1', '1', NULL, 144),
(785, 15, '1', '1', '1', '1', NULL, 144),
(786, 8, '1', '1', '4', '1', 'null', 146),
(787, 9, '1', '1', '1', '1', NULL, 146),
(788, 10, '1', '1', '4', '1', 'null', 146),
(789, 11, '1', '1', '1', '1', NULL, 146),
(790, 12, '1', '1', '1', '1', NULL, 146),
(791, 13, '1', '1', '1', '1', NULL, 146),
(792, 14, '1', '1', '1', '1', NULL, 146),
(793, 15, '1', '1', '1', '1', NULL, 146),
(794, 8, '1', '4', '1', '1', 'null', 147),
(795, 9, '1', '1', '1', '1', NULL, 147),
(796, 10, '1', '1', '2', '1', 'null', 147),
(797, 11, '1', '1', '1', '1', NULL, 147),
(798, 12, '1', '1', '1', '1', NULL, 147),
(799, 13, '1', '1', '1', '1', NULL, 147),
(800, 14, '1', '1', '1', '1', NULL, 147),
(801, 15, '1', '1', '1', '1', NULL, 147),
(802, 8, '1', '1', '1', '3', 'null', 148),
(803, 9, '1', '1', '1', '1', NULL, 148),
(804, 10, '1', '1', '1', '1', NULL, 148),
(805, 11, '1', '1', '1', '1', NULL, 148),
(806, 12, '1', '1', '1', '1', NULL, 148),
(807, 13, '1', '1', '1', '4', 'null', 148),
(808, 14, '1', '1', '1', '1', NULL, 148),
(809, 15, '1', '1', '1', '1', NULL, 148),
(810, 12, '1', '1', '1', '3', 'null', 149),
(811, 8, '1', '1', '1', '1', NULL, 150),
(812, 9, '1', '1', '1', '1', NULL, 150),
(813, 10, '1', '1', '1', '1', NULL, 150),
(814, 11, '4', '1', '1', '1', 'null', 150),
(815, 12, '1', '1', '1', '1', NULL, 150),
(816, 13, '1', '1', '1', '1', NULL, 150),
(817, 14, '1', '1', '1', '1', NULL, 150),
(818, 15, '1', '1', '2', '1', 'null', 150),
(819, 1, '1', '1', '1', '1', NULL, 151),
(820, 2, '1', '1', '1', '1', NULL, 151),
(821, 3, '1', '1', '1', '1', NULL, 151),
(822, 4, '1', '1', '1', '2', 'null', 151),
(823, 5, '1', '1', '1', '1', NULL, 151),
(824, 6, '1', '1', '1', '1', NULL, 151),
(825, 7, '1', '1', '1', '1', NULL, 151),
(826, 16, '1', '1', '1', '1', NULL, 151),
(827, 17, '1', '1', '1', '1', NULL, 151),
(828, 20, '1', '1', '1', '1', NULL, 151),
(829, 21, '4', '1', '1', '1', 'null', 151),
(830, 22, '1', '1', '1', '1', NULL, 151),
(831, 4, '1', '1', '1', '1', NULL, 145),
(832, 1, '1', '1', '1', '1', NULL, 152),
(833, 3, '1', '1', '1', '1', NULL, 152),
(834, 4, '1', '1', '1', '1', NULL, 152),
(835, 3, '1', '1', '1', '1', NULL, 153),
(836, 6, '1', '1', '1', '1', NULL, 153),
(837, 17, '1', '1', '1', '1', NULL, 153),
(838, 6, '1', '1', '1', '1', NULL, 154),
(839, 16, '1', '1', '1', '1', NULL, 154),
(840, 17, '1', '1', '1', '1', NULL, 154),
(841, 22, '1', '1', '1', '1', NULL, 154),
(842, 12, '1', '1', '1', '1', NULL, 155),
(843, 13, '1', '1', '1', '1', NULL, 155),
(844, 15, '1', '1', '1', '1', NULL, 155),
(845, 8, '1', '1', '1', '1', NULL, 156),
(846, 9, '1', '1', '1', '1', NULL, 156),
(847, 10, '1', '4', '1', '1', 'null', 156),
(848, 11, '1', '1', '1', '1', NULL, 156),
(849, 12, '1', '1', '1', '1', NULL, 156),
(850, 13, '1', '1', '1', '1', NULL, 156),
(851, 14, '1', '1', '1', '1', NULL, 156),
(852, 15, '1', '1', '1', '1', NULL, 156),
(853, 9, '1', '1', '1', '1', NULL, 157),
(854, 12, '1', '1', '1', '1', NULL, 157),
(855, 5, '1', '1', '1', '1', NULL, 158),
(856, 6, '1', '1', '1', '1', NULL, 158),
(857, 16, '1', '1', '1', '1', NULL, 158),
(858, 1, '1', '1', '1', '1', NULL, 159),
(859, 2, '1', '1', '1', '1', NULL, 159),
(860, 3, '1', '1', '1', '1', NULL, 159),
(861, 4, '1', '1', '1', '1', NULL, 159),
(862, 5, '1', '1', '1', '1', NULL, 159),
(863, 6, '1', '1', '1', '1', NULL, 159),
(864, 7, '1', '1', '1', '1', NULL, 159),
(865, 16, '1', '1', '1', '1', NULL, 159),
(866, 17, '1', '1', '1', '1', NULL, 159),
(867, 20, '1', '1', '1', '1', NULL, 159),
(868, 21, '1', '1', '1', '1', NULL, 159),
(869, 22, '1', '1', '1', '1', NULL, 159),
(870, 13, '1', '1', '1', '1', NULL, 160),
(871, 14, '1', '1', '1', '1', NULL, 160),
(872, 15, '1', '1', '1', '1', NULL, 160),
(873, 8, '1', '1', '1', '1', NULL, 139),
(874, 9, '1', '1', '1', '1', NULL, 139),
(875, 10, '1', '1', '1', '1', NULL, 139),
(876, 13, '1', '1', '1', '1', NULL, 139),
(877, 14, '1', '1', '1', '1', NULL, 139),
(878, 15, '1', '1', '1', '1', NULL, 139),
(879, 8, '1', '1', '1', '1', NULL, 161),
(880, 13, '1', '1', '1', '1', NULL, 161),
(881, 15, '1', '1', '1', '1', NULL, 161),
(882, 8, '1', '1', '1', '1', NULL, 162),
(883, 9, '1', '1', '1', '1', NULL, 162),
(884, 10, '1', '1', '1', '1', NULL, 162),
(885, 11, '1', '1', '1', '1', NULL, 162),
(886, 12, '1', '1', '1', '1', NULL, 162),
(887, 13, '1', '1', '1', '1', NULL, 162),
(888, 14, '1', '1', '1', '1', NULL, 162),
(889, 15, '1', '1', '1', '1', NULL, 162),
(890, 8, '1', '1', '1', '1', NULL, 163),
(891, 13, '1', '1', '1', '1', NULL, 163),
(892, 11, '1', '1', '1', '1', NULL, 164),
(893, 14, '1', '1', '1', '1', NULL, 164),
(894, 15, '1', '1', '1', '1', NULL, 164),
(895, 8, '1', '1', '1', '4', 'null', 165),
(896, 10, '1', '1', '1', '1', NULL, 165),
(897, 2, '1', '4', '1', '1', 'null', 166),
(898, 5, '1', '1', '1', '1', NULL, 166),
(899, 7, '1', '1', '1', '1', NULL, 166),
(900, 4, '1', '1', '1', '1', NULL, 167),
(901, 7, '1', '1', '1', '1', NULL, 167),
(902, 20, '1', '1', '1', '3', 'null', 167),
(903, 22, '1', '1', '1', '1', NULL, 167),
(904, 1, '1', '1', '1', '1', NULL, 169),
(905, 2, '1', '1', '1', '1', NULL, 169),
(906, 3, '1', '1', '1', '1', NULL, 169),
(907, 4, '4', '1', '1', '1', 'null', 169),
(908, 5, '1', '1', '1', '1', NULL, 169),
(909, 6, '1', '1', '1', '1', NULL, 169),
(910, 7, '1', '1', '1', '1', NULL, 169),
(911, 16, '1', '1', '1', '1', NULL, 169),
(912, 17, '1', '1', '1', '1', NULL, 169),
(913, 20, '1', '1', '1', '1', NULL, 169),
(914, 21, '1', '1', '1', '1', NULL, 169),
(915, 22, '1', '1', '1', '1', NULL, 169),
(916, 2, '1', '1', '1', '1', NULL, 170),
(917, 3, '1', '1', '1', '1', NULL, 170),
(918, 17, '1', '1', '1', '3', 'null', 170),
(919, 1, '1', '1', '5', '1', 'null', 168),
(920, 2, '1', '1', '1', '1', NULL, 168),
(921, 3, '1', '1', '1', '1', NULL, 168),
(922, 4, '1', '1', '1', '1', NULL, 168),
(923, 5, '1', '1', '1', '1', NULL, 168),
(924, 6, '1', '1', '1', '1', NULL, 168),
(925, 7, '1', '1', '1', '1', NULL, 168),
(926, 16, '1', '1', '1', '1', NULL, 168),
(927, 17, '1', '1', '1', '1', NULL, 168),
(928, 20, '1', '1', '1', '1', NULL, 168),
(929, 21, '1', '1', '1', '1', NULL, 168),
(930, 22, '1', '1', '1', '1', NULL, 168),
(931, 13, '1', '1', '1', '1', NULL, 129),
(932, 8, '1', '1', '1', '1', NULL, 171),
(933, 12, '5', '1', '1', '1', 'null', 171),
(934, 13, '1', '1', '1', '1', NULL, 171),
(935, 9, '6', '1', '1', '1', 'null', 172),
(936, 13, '1', '1', '1', '1', NULL, 172),
(937, 9, '7', '1', '1', '1', 'null', 174),
(938, 13, '1', '1', '1', '1', NULL, 174),
(939, 14, '1', '1', '1', '1', NULL, 174),
(940, 8, '1', '1', '1', '1', NULL, 173),
(941, 10, '1', '1', '1', '1', NULL, 173),
(942, 14, '1', '1', '1', '1', NULL, 173),
(943, 10, '2', '1', '1', '1', 'null', 175),
(944, 11, '1', '1', '1', '1', NULL, 175),
(1047, 13, '1', '1', '1', '1', NULL, 135),
(1048, 12, '1', '1', '1', '1', NULL, 135),
(1049, 11, '1', '1', '1', '1', NULL, 135),
(1064, 2, '1', '1', '1', '1', NULL, 134),
(1065, 3, '1', '1', '1', '1', NULL, 134),
(1066, 4, '1', '1', '1', '1', NULL, 134),
(1079, 9, '1', '1', '1', '1', NULL, 177),
(1080, 10, '1', '1', '1', '1', NULL, 177),
(1081, 11, '1', '1', '1', '1', NULL, 177),
(1082, 12, '1', '1', '1', '1', NULL, 177),
(1083, 13, '1', '1', '1', '1', NULL, 177),
(1092, 10, '1', '1', '1', '1', NULL, 179),
(1093, 11, '1', '1', '1', '1', NULL, 179),
(1094, 12, '1', '1', '1', '1', NULL, 179),
(1095, 13, '1', '1', '1', '1', NULL, 179),
(1099, 10, '1', '1', '1', '1', NULL, 181),
(1100, 11, '1', '1', '1', '1', NULL, 181),
(1101, 12, '1', '1', '1', '1', NULL, 181),
(1102, 13, '1', '1', '1', '1', NULL, 181),
(1115, 6, '1', '1', '1', '1', NULL, 182),
(1116, 5, '1', '1', '1', '1', NULL, 182),
(1117, 4, '1', '1', '1', '1', NULL, 182),
(1118, 3, '1', '1', '1', '1', NULL, 182),
(1122, 11, '1', '1', '1', '1', NULL, 176),
(1123, 13, '1', '1', '1', '1', NULL, 176),
(1124, 12, '1', '1', '1', '1', NULL, 176),
(1127, 3, '1', '6', '1', '1', 'null', 180),
(1128, 2, '1', '1', '7', '1', '', 180),
(1129, 5, '1', '1', '1', '1', NULL, 180),
(1130, 6, '1', '1', '1', '1', NULL, 180),
(1131, 1, '1', '1', '1', '8', '', 180),
(1132, 4, '14', '1', '1', '1', 'null', 180),
(1133, 7, '1', '1', '1', '1', NULL, 180),
(1134, 16, '1', '1', '1', '1', NULL, 180),
(1135, 17, '1', '1', '1', '1', NULL, 180),
(1136, 20, '1', '1', '1', '1', NULL, 180),
(1137, 21, '1', '1', '1', '1', NULL, 180),
(1138, 22, '1', '1', '1', '1', NULL, 180),
(1139, 11, '1', '1', '1', '1', NULL, 207),
(1140, 12, '1', '1', '1', '1', NULL, 207),
(1141, 13, '1', '1', '1', '1', NULL, 207),
(1143, 12, '1', '1', '1', '1', NULL, 210),
(1144, 13, '1', '1', '1', '1', NULL, 210),
(1145, 9, '1', '1', '1', '1', NULL, 210),
(1146, 10, '1', '1', '1', '1', NULL, 210),
(1147, 11, '1', '1', '1', '1', NULL, 211),
(1148, 12, '1', '1', '1', '1', NULL, 211),
(1149, 13, '1', '1', '1', '1', NULL, 211),
(1152, 10, '1', '1', '1', '1', NULL, 212),
(1153, 9, '1', '1', '1', '1', NULL, 212),
(1154, 8, '1', '1', '1', '1', NULL, 212),
(1155, 9, '1', '1', '1', '2', 'null', 178),
(1156, 8, '1', '1', '1', '1', NULL, 178),
(1157, 12, '1', '1', '1', '1', NULL, 178),
(1158, 13, '1', '1', '1', '1', NULL, 178),
(1159, 14, '1', '1', '1', '1', NULL, 178),
(1160, 15, '1', '1', '1', '1', NULL, 178),
(1161, 8, '1', '1', '1', '1', NULL, 210),
(1162, 14, '1', '1', '1', '1', NULL, 210),
(1163, 15, '1', '1', '1', '1', NULL, 210),
(1164, 1, '1', '1', '1', '1', NULL, 199),
(1165, 2, '1', '1', '1', '1', NULL, 199),
(1166, 3, '1', '1', '1', '1', NULL, 199),
(1167, 4, '1', '1', '1', '1', NULL, 199),
(1168, 5, '1', '1', '1', '1', NULL, 199),
(1169, 6, '1', '1', '1', '1', NULL, 199),
(1170, 7, '1', '1', '1', '1', NULL, 199),
(1171, 16, '1', '1', '1', '1', NULL, 199),
(1172, 17, '1', '1', '1', '1', NULL, 199),
(1173, 20, '1', '1', '1', '1', NULL, 199),
(1174, 21, '1', '1', '1', '1', NULL, 199),
(1175, 22, '1', '1', '1', '1', NULL, 199),
(1176, 11, '1', '1', '1', '1', NULL, 210),
(1177, 3, '1', '1', '1', '1', NULL, 214),
(1178, 4, '1', '1', '1', '1', NULL, 214),
(1179, 5, '1', '1', '1', '1', NULL, 214),
(1180, 6, '1', '1', '1', '1', NULL, 214),
(1181, 16, '1', '1', '1', '1', NULL, 214),
(1182, 8, '1', '2', '2', '1', 'null', 215),
(1183, 9, '1', '1', '1', '1', NULL, 215);

-- --------------------------------------------------------

--
-- Table structure for table `ppmpitem_mod`
--

CREATE TABLE `ppmpitem_mod` (
  `ppmpitem_mod_id` int(11) NOT NULL,
  `PPMP_id_mod` int(45) NOT NULL DEFAULT '0',
  `PPMP_id` int(11) DEFAULT NULL,
  `Item_id_FIELD` int(45) NOT NULL,
  `PPMPItem_fstQtrQty_FIELD` int(45) NOT NULL DEFAULT '1',
  `PPMPItem_scdQtrQty_FIELD` int(45) NOT NULL DEFAULT '1',
  `PPMPItem_trdQtrQty_FIELD` int(45) NOT NULL DEFAULT '1',
  `PPMPItem_frtQtrQty_FIELD` int(45) NOT NULL DEFAULT '1',
  `PPMPItem_note` varchar(45) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ppmpitem_mod`
--

INSERT INTO `ppmpitem_mod` (`ppmpitem_mod_id`, `PPMP_id_mod`, `PPMP_id`, `Item_id_FIELD`, `PPMPItem_fstQtrQty_FIELD`, `PPMPItem_scdQtrQty_FIELD`, `PPMPItem_trdQtrQty_FIELD`, `PPMPItem_frtQtrQty_FIELD`, `PPMPItem_note`) VALUES
(55, 88, 176, 10, 1, 1, 1, 1, NULL),
(54, 88, 176, 9, 1, 1, 1, 1, NULL),
(53, 88, 176, 12, 1, 1, 1, 1, NULL),
(52, 88, 176, 13, 1, 1, 1, 1, NULL),
(51, 88, 176, 11, 1, 1, 1, 1, NULL),
(59, 88, 176, 15, 1, 1, 1, 1, NULL),
(90, 101, 215, 14, 1, 1, 1, 1, NULL),
(89, 101, 215, 9, 1, 1, 1, 1, NULL),
(88, 101, 215, 8, 1, 2, 2, 1, 'null'),
(87, 100, 210, 11, 1, 1, 1, 1, NULL),
(86, 100, 210, 15, 1, 1, 1, 1, NULL),
(85, 100, 210, 14, 1, 1, 1, 1, NULL),
(84, 100, 210, 8, 1, 1, 1, 1, NULL),
(83, 100, 210, 10, 1, 1, 1, 1, NULL),
(82, 100, 210, 9, 1, 1, 1, 1, NULL),
(81, 100, 210, 13, 1, 1, 1, 1, NULL),
(80, 100, 210, 12, 1, 1, 1, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `ppmps_mod_request`
--

CREATE TABLE `ppmps_mod_request` (
  `PPMP_id_mod` int(11) NOT NULL,
  `PPMP_id` int(100) NOT NULL,
  `user_id` int(45) NOT NULL,
  `PPMP_req_status` varchar(45) DEFAULT 'pending',
  `req_submitted` varchar(45) NOT NULL DEFAULT 'no',
  `choose_insertion` varchar(45) NOT NULL DEFAULT 'true',
  `ppmps_mod_remark` varchar(45) NOT NULL DEFAULT '',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ppmps_mod_request`
--

INSERT INTO `ppmps_mod_request` (`PPMP_id_mod`, `PPMP_id`, `user_id`, `PPMP_req_status`, `req_submitted`, `choose_insertion`, `ppmps_mod_remark`) VALUES
(7, 134, 15, 'approved', 'yes', 'false', 'q'),
(8, 135, 15, 'approved', 'yes', 'false', 'aaa'),
(11, 134, 15, 'approved', 'yes', 'false', ''),
(16, 134, 15, 'declined', 'yes', 'false', ''),
(17, 134, 15, 'declined', 'yes', 'false', ''),
(18, 134, 15, 'approved', 'yes', 'false', ''),
(23, 134, 15, 'approved', 'yes', 'false', ''),
(24, 134, 15, 'approved', 'yes', 'false', ''),
(25, 135, 15, 'approved', 'yes', 'false', 'This is good'),
(26, 134, 15, 'approved', 'yes', 'false', 'Good plan.!!'),
(27, 135, 15, 'approved', 'yes', 'false', 'Good job!!!'),
(28, 134, 15, 'approved', 'yes', 'false', 'sa'),
(29, 135, 15, 'declined', 'yes', 'false', ''),
(30, 176, 21, 'approved', 'yes', 'false', 'good!!!'),
(31, 176, 21, 'declined', 'yes', 'false', 'sorry!!'),
(32, 134, 15, 'approved', 'yes', 'false', 'sasasas'),
(33, 176, 21, 'approved', 'yes', 'false', ''),
(66, 177, 6, 'approved', 'yes', 'false', 'kk'),
(67, 177, 6, 'declined', 'yes', 'false', 'asas'),
(79, 182, 6, 'approved', 'yes', 'false', ''),
(77, 176, 21, 'approved', 'yes', 'false', ''),
(80, 176, 21, 'approved', 'yes', 'false', ''),
(81, 180, 21, 'approved', 'yes', 'false', ''),
(88, 176, 21, 'pending', 'yes', 'false', ''),
(87, 180, 21, 'approved', 'yes', 'false', 'Good!!'),
(90, 212, 39, 'approved', 'yes', 'false', ''),
(98, 178, 21, 'approved', 'yes', 'false', ''),
(100, 210, 21, 'pending', 'no', 'false', ''),
(101, 215, 21, 'pending', 'yes', 'false', '');

-- --------------------------------------------------------

--
-- Table structure for table `ppmps_table`
--

CREATE TABLE `ppmps_table` (
  `PPMP_id_FIELD` int(11) NOT NULL,
  `User_id_FIELD` int(11) NOT NULL,
  `PPMP_status` varchar(45) NOT NULL DEFAULT 'pending',
  `PPMP_mod` varchar(45) NOT NULL DEFAULT 'false',
  `PPMP_date_submitted` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `PPMP_defaultItemsType_FIELD` varchar(10) NOT NULL,
  `PPMP_year_FIELD` varchar(45) DEFAULT NULL,
  `PPMP_fund_FIELD` varchar(70) NOT NULL,
  `PPMP_recomAprvlPerson_FIELD` varchar(50) NOT NULL,
  `PPMP_recomAprvlPersonPostn_FIELD` varchar(50) NOT NULL,
  `PPMP_aprvdByPerson_FIELD` varchar(50) NOT NULL,
  `PPMP_aprvdByPersonPostn_FIELD` varchar(50) NOT NULL,
  `submitted` varchar(45) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `PPMP_entityFirstTradeMark_FIELD` varchar(70) NOT NULL,
  `PPMP_entitySecondTradeMark_FIELD` text NOT NULL,
  `PPMP_entityThirdTradeMark_FIELD` varchar(70) NOT NULL,
  `PPMP_endUserName_FIELD` varchar(50) NOT NULL,
  `PPMP_endUserPosition` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ppmps_table`
--

INSERT INTO `ppmps_table` (`PPMP_id_FIELD`, `User_id_FIELD`, `PPMP_status`, `PPMP_mod`, `PPMP_defaultItemsType_FIELD`, `PPMP_year_FIELD`, `PPMP_fund_FIELD`, `PPMP_recomAprvlPerson_FIELD`, `PPMP_recomAprvlPersonPostn_FIELD`, `PPMP_aprvdByPerson_FIELD`, `PPMP_aprvdByPersonPostn_FIELD`, `submitted`, `PPMP_entityFirstTradeMark_FIELD`, `PPMP_entitySecondTradeMark_FIELD`, `PPMP_entityThirdTradeMark_FIELD`, `PPMP_endUserName_FIELD`, `PPMP_endUserPosition`) VALUES
(1, 0, 'approved', 'false', 'CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'ASTS', '', 'Joselin T. Macayanan', 'END-USER'),
(2, 0, 'declined', 'false', 'Non-CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'ASTS', 'NANOTECH R&D FACILITY', 'Joselin T. Macayanan', 'END-USER'),
(3, 0, 'approved', 'false', 'CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'BIOTECH', '', 'Dennis C. Paraguison', 'END-USER'),
(4, 0, 'pending', 'false', 'CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'CAG', '', 'Jasmin D. Lazaro', 'END-USER'),
(5, 0, 'pending', 'false', 'CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'CAS', '', 'Rosalie SIlvestre', 'END-USER'),
(6, 0, 'pending', 'false', 'CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'CCLS', '', 'Mary Joy Saldivar', 'END-USER'),
(7, 0, 'pending', 'false', 'CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'CED', '', 'Cherry Mae Bagalay', 'END-USER'),
(8, 0, 'pending', 'false', 'CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'CEN', '', 'Francis Canare', 'END-USER'),
(9, 0, 'pending', 'false', 'CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'CERDS', '', 'Jonathan O. Tilan', 'END-USER'),
(10, 0, 'pending', 'false', 'CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'CF', '', 'John Mark Causing', 'END-USER'),
(11, 0, 'pending', 'false', 'CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'CHSI', '', 'John Mark Gatchalian', 'END-USER'),
(12, 0, 'pending', 'false', 'CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'CTEC', '', 'Israel Alisoso', 'END-USER'),
(13, 0, 'pending', 'false', 'CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'CWTS', '', 'Francis Ancheta', 'END-USER'),
(14, 0, 'pending', 'false', 'CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'DOTUNI', '', 'Kryss R Bartolome', 'END-USER'),
(15, 0, 'pending', 'false', 'CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'ETEEP', '', 'Rafael Fontanos', 'END-USER'),
(16, 0, 'pending', 'false', 'CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'FAC', '', 'Andro Tubeje', 'END-USER'),
(17, 0, 'pending', 'false', 'CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'ICCEM', '', 'Jan Nicole Farro', 'END-USER'),
(18, 0, 'pending', 'false', 'CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'ISPEAR', '', 'ML Reyes', 'END-USER'),
(19, 0, 'pending', 'false', 'Non-CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'BIOTECH', '', 'Dennis C. Paraguison', 'END-USER'),
(20, 0, 'pending', 'false', 'Non-CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'CAG', '', 'Jasmin D. Lazaro', 'END-USER'),
(21, 0, 'pending', 'false', 'Non-CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'CAS', '', 'Rosalie SIlvestre', 'END-USER'),
(22, 0, 'pending', 'false', 'Non-CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'CCLS', '', 'Mary Joy Saldivar', 'END-USER'),
(23, 0, 'pending', 'false', 'Non-CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'CED', '', 'Cherry Mae Bagalay', 'END-USER'),
(24, 0, 'pending', 'false', 'Non-CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'CEN', '', 'Francis Canare', 'END-USER'),
(25, 0, 'pending', 'false', 'Non-CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'CERDS', '', 'Jonathan O. Tilan', 'END-USER'),
(26, 0, 'pending', 'false', 'Non-CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'CF', '', 'John Mark Causing', 'END-USER'),
(27, 0, 'pending', 'false', 'Non-CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'CHSI', '', 'John Mark Gatchalian', 'END-USER'),
(28, 0, 'pending', 'false', 'Non-CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'CTEC', '', 'Israel Alisoso', 'END-USER'),
(29, 0, 'pending', 'false', 'Non-CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'CWTS', '', 'Francis Ancheta', 'END-USER'),
(30, 0, 'pending', 'false', 'Non-CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'DOTUNI', '', 'Kryss Bartolome', 'END-USER'),
(31, 0, 'pending', 'false', 'Non-CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'ETEEP', '', 'Rafael Fontanos', 'END-USER'),
(32, 0, 'approved', 'false', 'Non-CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'FAC', '', 'Andro Tubeje', 'END-USER'),
(33, 0, 'pending', 'false', 'Non-CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'ICCEM', '', 'Jan Nicole Farro', 'END-USER'),
(34, 0, 'pending', 'false', 'Non-CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'ISPEAR', '', 'ML Reyes', 'END-USER'),
(35, 0, 'pending', 'false', 'CSE', '2020', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'ASTS', '', 'Angelo Fontanilla', 'END-USER'),
(36, 0, 'declined', 'false', 'CSE', '2020', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'BIOTECH', '', 'Angelica Ancheta', 'END-USER'),
(37, 0, 'pending', 'false', 'CSE', '2020', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'CAS', '', 'Leahna Ancheta', 'END-USER'),
(38, 0, 'pending', 'false', 'CSE', '2020', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'CCLS', '', 'Angelica Belica', 'END-USER'),
(39, 0, 'pending', 'false', 'CSE', '2020', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'CED', '', 'Viviene Bergan', 'END-USER'),
(40, 0, 'pending', 'false', 'CSE', '2020', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'CEN', '', 'Lorielyn Cabog', 'END-USER'),
(41, 0, 'pending', 'false', 'CSE', '2020', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'CERDS', '', 'Paula Mae Cardino', 'END-USER'),
(42, 0, 'pending', 'false', 'CSE', '2020', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'CF', '', 'Mary Jane Carere', 'END-USER'),
(43, 0, 'pending', 'false', 'CSE', '2020', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'CHSI', '', 'Marlyn Castillo', 'END-USER'),
(44, 0, 'pending', 'false', 'CSE', '2020', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'CTEC', '', 'Jessa Devera', 'END-USER'),
(45, 0, 'pending', 'false', 'CSE', '2020', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'CWTS', '', 'Grace Garcia', 'END-USER'),
(46, 0, 'pending', 'false', 'CSE', '2020', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'CAG', '', 'Jona May Ladiero', 'END-USER'),
(47, 0, 'pending', 'false', 'CSE', '2020', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'DOTUNI', '', 'Mara Laurente', 'END-USER'),
(48, 0, 'pending', 'false', 'CSE', '2020', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'ETEEAP', '', 'Zairene Laurio', 'END-USER'),
(49, 0, 'pending', 'false', 'CSE', '2020', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'FAC', '', 'Rica Napoles', 'END-USER'),
(50, 0, 'pending', 'false', 'CSE', '2020', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'ICCEM', '', 'Keith Nograles', 'END-USER'),
(51, 0, 'pending', 'false', 'CSE', '2020', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'ISPEAR', '', 'Judy Ann Paledped', 'END-USER'),
(52, 0, 'pending', 'false', 'Non-CSE', '2020', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'ASTS', '', 'Angelo Fontanilla', 'END-USER'),
(53, 0, 'approved', 'false', 'Non-CSE', '2020', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'BIOTECH', '', 'Angelica Ancheta', 'END-USER'),
(54, 0, 'pending', 'false', 'Non-CSE', '2020', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'CAS', '', 'Leahna Ancheta', 'END-USER'),
(55, 0, 'approved', 'false', 'Non-CSE', '2020', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'CCLS', '', 'Angelica Belica', 'END-USER'),
(56, 0, 'pending', 'false', 'Non-CSE', '2020', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'CED', '', 'Viviene Bergan', 'END-USER'),
(57, 0, 'pending', 'false', 'Non-CSE', '2020', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'CEN', '', 'Lorielyn Cabog', 'END-USER'),
(58, 0, 'pending', 'false', 'Non-CSE', '2020', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'CERDS', '', 'Paula Mae Cardino', 'END-USER'),
(59, 0, 'pending', 'false', 'Non-CSE', '2020', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'CF', '', 'Mary Jane Carere', 'END-USER'),
(60, 0, 'pending', 'false', 'Non-CSE', '2020', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'CHSI', '', 'Marlyn Castillo', 'END-USER'),
(61, 0, 'pending', 'false', 'Non-CSE', '2020', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'CTEC', '', 'Jessa Devera', 'END-USER'),
(62, 0, 'pending', 'false', 'Non-CSE', '2020', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'CWTS', '', 'Grace Garcia', 'END-USER'),
(63, 0, 'pending', 'false', 'Non-CSE', '2020', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'CAG', '', 'Jona May Ladiero', 'END-USER'),
(64, 0, 'pending', 'false', 'Non-CSE', '2020', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'DOTUNI', '', 'Mara Laurente', 'END-USER'),
(65, 0, 'pending', 'false', 'Non-CSE', '2020', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'ETEEAP', '', 'Zairene Laurio', 'END-USER'),
(66, 0, 'pending', 'false', 'Non-CSE', '2020', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'FAC', '', 'Rica Napoles', 'END-USER'),
(67, 0, 'pending', 'false', 'Non-CSE', '2020', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'ICCEM', '', 'Keith Nograles', 'END-USER'),
(68, 0, 'pending', 'false', 'Non-CSE', '2020', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'ISPEAR', '', 'Judy Ann Paledped', 'END-USER'),
(107, 0, 'pending', 'false', 'CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'RET', 'DEP RET', '(Name of Sub Extension Office Name)', 'Edu Delacruz', 'END-USER'),
(110, 0, 'pending', 'false', 'Non-CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'RET', 'RET RET1', 'Empty', 'Superman', 'END-USER'),
(111, 0, 'pending', 'false', 'CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'RET', 'RETATA', '(Name of Sub Extension Office Name)', 'Luffy', 'END-USER'),
(112, 0, 'pending', 'false', 'CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'RET', 'DEP RET', '(Name of Sub Extension Office Name)', 'ASASA', 'END-USER'),
(113, 0, 'pending', 'false', 'CSE', '2021', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'UBAP', 'UBAPWA', '(Name of Sub Extension Office Name)', 'CAT Girl', 'END-USER'),
(126, 18, 'pending', 'false', 'Non-CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'UBAP', 'Office of the UBA101', 'REFGA', 'Mario Baltazar', 'Secretary'),
(128, 18, 'pending', 'false', 'CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'UBAP', 'Office of the UBA101', 'REFGA', 'Mario Baltazar', 'Secretary'),
(129, 9, 'pending', 'false', 'CSE', '2020', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLAS', 'University President', 'yes', 'UBAP', 'UBAB123', 'Empty', 'Esperanza Paraguison', 'Accountant'),
(134, 15, 'approved', 'false', 'Non-CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'RET', 'Office of the VP for RET', 'RET Administration', 'Maria Adrielle S. Estigoy', 'Executive Secretary'),
(135, 15, 'approved', 'false', 'CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'RET', 'Office of the VP for RET', 'RET Administration', 'Maria Adrielle S. Estigoy', 'Executive Secretary'),
(136, 15, 'pending', 'false', 'CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'RET', 'Office of the VP for RET', 'RET Administration', 'Maria Adrielle S. Estigoy', 'Executive Secretary'),
(139, 22, 'pending', 'false', 'CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ADMIN', 'Admin12', ' ', 'Gabriel Tilan', 'Secreatary'),
(140, 22, 'pending', 'false', 'CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ADMIN', 'Admin12', ' ', 'Gabriel Tilan', 'Secreatary'),
(141, 22, 'pending', 'false', 'Non-CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ADMIN', 'Admin12', ' ', 'Gabriel Tilan', 'Secreatary'),
(142, 22, 'pending', 'false', 'Non-CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ADMIN', 'Admin12', ' ', 'Gabriel Tilan', 'Secreatary'),
(143, 9, 'pending', 'false', 'CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ADMIN', 'ADMIN123', 'Empty', 'Esperanza Paraguison', 'Accountant'),
(144, 9, 'pending', 'false', 'CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ADMIN', 'ADIMN123', 'Empty', 'Esperanza Paraguison', 'Accountant'),
(145, 9, 'pending', 'false', 'Non-CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ADMIN', 'ADMIN ACC', 'Empty', 'Esperanza Paraguison', 'Accountant'),
(146, 9, 'pending', 'false', 'CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ADMIN', 'ADMIN123', 'Empty', 'Esperanza Paraguison', 'Accountant'),
(147, 9, 'pending', 'false', 'CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ADMIN', 'ADMIN office', 'Empty', 'Esperanza Paraguison', 'Accountant'),
(148, 9, 'pending', 'false', 'CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ADMIN', 'ADMIN Secret', 'Empty', 'Esperanza Paraguison', 'Accountant'),
(149, 9, 'pending', 'false', 'CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ADMIN', 'ADMIN 321', 'Empty', 'Esperanza Paraguison', 'Accountant'),
(150, 9, 'pending', 'false', 'CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ADMIN', 'ADMIN post', 'Empty', 'Esperanza Paraguison', 'Accountant'),
(151, 9, 'pending', 'false', 'Non-CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ADMIN', 'ADMIN POV', 'Empty', 'Esperanza Paraguison', 'Accountant'),
(152, 9, 'pending', 'false', 'Non-CSE', '2020', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ADMIN', 'ADMIN TAY', 'Empty', 'Esperanza Paraguison', 'Accountant'),
(153, 9, 'pending', 'false', 'Non-CSE', '2020', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ADMIN', 'ADMIN POY', 'Empty', 'Esperanza Paraguison', 'Accountant'),
(154, 9, 'pending', 'false', 'Non-CSE', '2020', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ADMIN', 'ADMIN HAT', 'Empty', 'Esperanza Paraguison', 'Accountant'),
(155, 9, 'pending', 'false', 'CSE', '2020', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ADMIN', 'ADMIN NEW', 'Empty', 'Esperanza Paraguison', 'Accountant'),
(156, 9, 'pending', 'false', 'CSE', '2020', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ADMIN', 'ADMIN OLD', 'Empty', 'Esperanza Paraguison', 'Accountant'),
(157, 9, 'pending', 'false', 'CSE', '2020', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ADMIN', 'ADMIN SIN', 'Empty', 'Esperanza Paraguison', 'Accountant'),
(158, 9, 'pending', 'false', 'Non-CSE', '2021', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ADMIN', 'ADMIN RAW', 'Empty', 'Esperanza Paraguison', 'Accountant'),
(159, 9, 'pending', 'false', 'Non-CSE', '2021', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ADMIN', 'ADMIN 000', 'Empty', 'Esperanza Paraguison', 'Accountant'),
(160, 9, 'pending', 'false', 'CSE', '2021', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ADMIN', 'ADMIN 098', 'Empty', 'Esperanza Paraguison', 'Accountant'),
(161, 9, 'pending', 'false', 'CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'UBAP', 'ADMIN123', 'Empty', 'Esperanza Paraguison', 'Accountant'),
(162, 9, 'pending', 'false', 'CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'UBAP', 'ADMIN Office', 'Empty', 'Esperanza Paraguison', 'Accountant'),
(163, 9, 'pending', 'false', 'CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'UBAP', 'ADMIN Secret', 'Empty', 'Esperanza Paraguison', 'Accountant'),
(164, 9, 'pending', 'false', 'CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'UBAP', 'ADMIN 321', 'Empty', 'Esperanza Paraguison', 'Accountant'),
(165, 9, 'pending', 'false', 'CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'UBAP', 'ADMIN POST', 'Empty', 'Esperanza Paraguison', 'Accountant'),
(166, 9, 'approved', 'false', 'Non-CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'UBAP', 'ADMIN POV', 'Empty', 'Esperanza Paraguison', 'Accountant'),
(167, 9, 'approved', 'false', 'Non-CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'UBAP', 'UBAB ACC', 'Empty', 'Esperanza Paraguison', 'Accountant'),
(168, 9, 'approved', 'false', 'Non-CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'UBAP', 'UBAB HAT', 'Empty', 'Esperanza Paraguison', 'Accountant'),
(169, 9, 'approved', 'false', 'Non-CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'UBAP', 'UBAB TAY', 'Empty', 'Esperanza Paraguison', 'Accountant'),
(170, 9, 'approved', 'false', 'Non-CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'UBAP', 'UBAB POY', 'Empty', 'Esperanza Paraguison', 'Accountant'),
(171, 9, 'approved', 'false', 'CSE', '2020', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'UBAP', 'UBAB Office', 'Empty', 'Esperanza Paraguison', 'Accountant'),
(172, 9, 'approved', 'false', 'CSE', '2020', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'UBAP', 'UBAB secret', 'Empty', 'Esperanza Paraguison', 'Accountant'),
(173, 9, 'approved', 'false', 'CSE', '2020', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'UBAP', 'UBAB POST', 'Empty', 'Esperanza Paraguison', 'Accountant'),
(174, 9, 'declined', 'false', 'CSE', '2020', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'UBAP', 'UBAB 321', 'Empty', 'Esperanza Paraguison', 'Accountant'),
(175, 15, 'pending', 'false', 'CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'RET', 'Office of the VP for RET', 'RET Administration', 'Maria Adrielle S. Estigoy', 'Executive Secretary'),
(176, 21, 'approved', 'false', 'CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'bsmath', 'organization', 'Leslie Galila', 'Treasurer'),
(177, 6, 'pending', 'false', 'CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'Department of Mathematics', '', 'C-Jay Paraguison', 'Auditor'),
(178, 21, 'approved', 'false', 'CSE', '2020', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'bsmath', 'organization', 'Leslie Galila', 'Treasurer'),
(179, 6, 'pending', 'false', 'CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'Department of Mathematics', '', 'C-Jay Paraguison', 'Auditor'),
(180, 21, 'approved', 'false', 'Non-CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'bsmath', 'organization', 'Leslie Galila', 'Treasurer'),
(181, 21, 'approved', 'false', 'CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'bsmath', 'organization', 'Leslie Galila', 'Treasurer'),
(182, 6, 'approved', 'false', 'Non-CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'Department of Mathematics', 'Empty', 'C-Jay Paraguison', 'Auditor'),
(189, 21, 'pending', 'false', 'Non-CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'no', 'cas', 'bsmath', 'organization', 'Leslie Galila', 'Treasurer'),
(198, 21, 'pending', 'false', 'CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'no', 'cas', 'bsmath', 'organization', 'Leslie Galila', 'Treasurer'),
(199, 21, 'approved', 'false', 'Non-CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'bsmath', 'organization', 'Leslie Galila', 'Treasurer'),
(200, 21, 'pending', 'false', 'CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'no', 'cas', 'bsmath', 'organization', 'Leslie Galila', 'Treasurer'),
(201, 9, 'pending', 'false', 'CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'no', 'ADMIN', 'ADMIN123', '', 'Esperanza Paraguison', 'Accountant'),
(202, 9, 'pending', 'false', 'Non-CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'no', 'ADMIN', 'ADMIN123', '', 'Esperanza Paraguison', 'Accountant'),
(203, 9, 'pending', 'false', 'Non-CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'no', 'ADMIN', 'ADMIN123', '', 'Esperanza Paraguison', 'Accountant'),
(204, 9, 'pending', 'false', 'Non-CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'no', 'ADMIN', 'ADMIN123', '', 'Esperanza Paraguison', 'Accountant'),
(205, 9, 'pending', 'false', 'Non-CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'no', 'ADMIN', 'ADMIN123', '', 'Esperanza Paraguison', 'Accountant'),
(206, 9, 'pending', 'false', 'CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'no', 'ADMIN', 'ADMIN123', '', 'Esperanza Paraguison', 'Accountant'),
(207, 9, 'pending', 'false', 'CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'no', 'ADMIN', 'ADMIN123', '', 'Esperanza Paraguison', 'Accountant'),
(208, 9, 'pending', 'false', 'CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'no', 'ADMIN', 'ADMIN123', '', 'Esperanza Paraguison', 'Accountant'),
(209, 9, 'pending', 'false', 'CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'no', 'ADMIN', 'ADMIN123', '', 'Esperanza Paraguison', 'Accountant'),
(210, 21, 'pending', 'false', 'CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'VPAA', '', 'Leslie Galila', 'Treasurer'),
(211, 9, 'pending', 'false', 'CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'no', 'ACAD', 'ADMIN123', 'Empty', 'Esperanza Paraguison', 'Accountant'),
(212, 39, 'approved', 'false', 'CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'ACAD', 'CEN', 'Sample', 'Jasa', 'Sample'),
(213, 9, 'pending', 'false', 'Non-CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'no', 'ADMIN', 'ADMIN123', '', 'Esperanza Paraguison', 'Accountant'),
(214, 21, 'pending', 'false', 'Non-CSE', '2019', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'no', 'cas', 'bsmath', 'Empty', 'NEMESIO A. MACABALE, JR.', 'Director, ISI'),
(215, 21, 'pending', 'false', 'CSE', '2021', 'GAA (101)', 'MELISSA A. AGULTO', 'VP for Academic Affairs', 'TERESO A. ABELLA', 'University President', 'yes', 'RET', 'ICCEM', 'Empty', 'Leslie Galila', 'Treasurer');

-- --------------------------------------------------------

--
-- Table structure for table `seen_announcement`
--

CREATE TABLE `seen_announcement` (
  `seen_id` int(11) NOT NULL,
  `notif_id` int(11) NOT NULL,
  `user_id` int(45) NOT NULL,
  `unique_user_notif` varchar(45) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `seen_announcement`
--

INSERT INTO `seen_announcement` (`seen_id`, `notif_id`, `user_id`, `unique_user_notif`) VALUES
(1, 183, 21, '18321'),
(2, 141, 21, '14121');

-- --------------------------------------------------------

--
-- Table structure for table `users_table`
--

CREATE TABLE `users_table` (
  `User_id_FIELD` int(11) NOT NULL,
  `email` text NOT NULL,
  `User_name_FIELD` varchar(40) NOT NULL,
  `User_username_FIELD` varchar(50) NOT NULL,
  `User_password_FIELD` text NOT NULL,
  `User_usertype_FIELD` varchar(20) NOT NULL,
  `User_position_FIELD` varchar(80) NOT NULL,
  `User_entityBelongedMainOrganizationName_FIELD` varchar(70) NOT NULL,
  `User_entityBelongedSubOrganizationName_FIELD` varchar(70) NOT NULL,
  `User_entityBelongedExtOrganizationName_FIELD` varchar(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users_table`
--

INSERT INTO `users_table` (`User_id_FIELD`, `email`, `User_name_FIELD`, `User_username_FIELD`, `User_password_FIELD`, `User_usertype_FIELD`, `User_position_FIELD`, `User_entityBelongedMainOrganizationName_FIELD`, `User_entityBelongedSubOrganizationName_FIELD`, `User_entityBelongedExtOrganizationName_FIELD`) VALUES
(2, 'macayananjoselin@gmail.com', 'Badong Paraguison', 'shuden', 'eNBobFZJ4Wq0But', 'Administrator', 'Peon', 'General Administration Service', 'Bids And Awards Committree (BAC)', 'Procurement Office'),
(5, 'macayananjoselin20@gmail.com', 'Montano Paraguison', 'tano', 'eNBobFZJ4Wq0But', 'Administrator', 'Peon', 'General Administration Service', 'Bids And Awards Committree (BAC)', 'Procurement Office'),
(6, 'macayananjoselin19@gmail.com', 'C-Jay Paraguison', 'monto', 'eNBobFZJ4Wq0But', 'End-user', 'Auditor', 'ACAD', 'Department of Mathematics', ''),
(8, 'macayananjoselin18@gmail.com', 'Harold Paraguison', 'camille', 'eNBobFZJ4Wq0But', 'End-user', 'Engineer', 'College of Engineering', 'Department of Civil Engineering', ''),
(9, 'macayananjoselin@gmail.com', 'Esperanza Paraguison', 'espe', 'qwerty', 'Administrator', 'Secretary', 'ADMIN', 'ADMIN123', ''),
(11, 'macayananjoselin17@gmail.com', 'Camille Anne Paraguison', 'harold paraguison', 'eNBobFZJ4Wq0But', 'End-user', 'Secretariat', 'Bids and Awards Committe (BAC)', 'canadian', 'girl'),
(14, 'macayananjoselin16@gmail.com', 'Estella De Vera', 'estella', 'eNBobFZJ4Wq0But', 'End-user', 'Manager', 'asdasd', 'fdsfs', 'asdasfs'),
(15, 'macayananjoselin15@gmail.com', 'Maria Adrielle S. Estigoy', 'maria', 'eNBobFZJ4Wq0But', 'End-user', 'Executive Secretary', 'RET', 'Office of the VP for RET', 'RET Administration'),
(16, 'macayananjoselin14@gmail.com', 'Reneo Agulto', 'agulto', 'eNBobFZJ4Wq0But', 'End-user', 'Dean CEN', 'ACAD', 'CEN', 'Engineer'),
(17, 'macayananjoselin13@gmail.com', 'Maria Gatchalian', 'gatchalian', 'eNBobFZJ4Wq0But', 'End-user', 'Secretary', 'ADMIN', 'Department of ADMIN1223', 'Office 101'),
(18, 'macayananjoselin12@gmail.com', 'Mario Baltazar', 'mario', 'eNBobFZJ4Wq0But', 'End-user', 'Secretary', 'UBAB', 'Office of the UBA101', 'REFGA'),
(19, 'macayananjoselin11@gmail.com', 'Jessy Mendiola', 'jessy', 'eNBobFZJ4Wq0But', 'End-user', 'Secretary', 'Cen', 'ISI', 'Clirdec'),
(20, 'macayananjoselin10@gmail.com', 'Vanessa Manalac', 'vane', 'eNBobFZJ4Wq0But', 'End-user', 'auditor', 'cbaa', 'jma', 'jpia'),
(21, 'sample@gmail.com', 'Leslie Galila', 'leslie', 'leslie', 'End-user', 'Treasurer', 'cas', 'bsmath', ''),
(22, 'macayananjoselin8@gmail.com', 'Gabriel Tilan', 'gab', 'eNBobFZJ4Wq0But', 'End-user', 'Secreatary', 'ADMIN', 'Admin12', ' '),
(32, 'macayananjoselin7@gmail.com', '12', '12', 'eNBobFZJ4Wq0But', 'End-user', '12', '12', '12', '12'),
(33, 'macayananjoselin6@gmail.com', 'Jona may', 'jona', 'eNBobFZJ4Wq0But', 'End-user', 'Manager', 'ACAD', 'CAS', 'EXT DEF'),
(34, 'macayananjoselin5@gmail.com', '12', '12', 'eNBobFZJ4Wq0But', 'End-user', '12', '12', '12', '12'),
(35, 'macayananjoselin4@gmail.com', 'io', 'io', 'eNBobFZJ4Wq0But', 'End-user', 'io', 'io', 'io', 'io'),
(36, 'macayananjoselin3@gmail.com', 'qw', 'qw', 'eNBobFZJ4Wq0But', 'End-user', 'qw', 'qw', 'qw', 'qw'),
(37, 'macayananjoselin2@gmail.com', 'gg', 'gg', 'eNBobFZJ4Wq0But', 'End-user', 'gg', 'gg', 'gg', 'gg'),
(38, 'sample1@gmail.com', 'asfad', 'adfssd', 'qwerty', 'End-user', 'asdf', 'dsaf', 'fsa', 'dasf'),
(39, 'macayananjoselin1@gmail.com', 'Jasa', 'jasa', 'jasa', 'End-user', 'Sample', 'ACAD', 'CEN', 'Sample'),
(40, 'asfdsa', 'asfdas', 'sada', 'jasa12', 'End-user', 'safds', 'safd', 'asdas', 'asfdas');

-- --------------------------------------------------------

--
-- Table structure for table `vouchers_table`
--

CREATE TABLE `vouchers_table` (
  `Voucher_id_FIELD` int(11) NOT NULL,
  `Voucher_code_FIELD` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `vouchers_table`
--

INSERT INTO `vouchers_table` (`Voucher_id_FIELD`, `Voucher_code_FIELD`) VALUES
(4, 'aRWTGRDFBFSR2343453saf'),
(5, 'wrwefdxf354y57cncjasfs'),
(6, 'sadxs1231ewa'),
(7, 'asd2231sd'),
(8, 'gjghjhgt1232'),
(9, 'vgfrtterfcf89'),
(10, 'gdvfh12324'),
(11, 'dxhfbfgj242wa'),
(12, 'sdbvxDF456'),
(13, 'cvnvbnvgx6789'),
(14, '6uhjf57ugt45y'),
(15, '34rweaw3rse'),
(16, 'jljh8i8uye4eft7ry'),
(17, '23ew3w23w2WER'),
(18, '321qw3we2qw3wASW');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `announcement`
--
ALTER TABLE `announcement`
  ADD PRIMARY KEY (`announcement_id`);

--
-- Indexes for table `items_table`
--
ALTER TABLE `items_table`
  ADD PRIMARY KEY (`Item_id_FIELD`);

--
-- Indexes for table `notification_table`
--
ALTER TABLE `notification_table`
  ADD PRIMARY KEY (`notification_id`);

--
-- Indexes for table `pmrpurchaseorders_table`
--
ALTER TABLE `pmrpurchaseorders_table`
  ADD PRIMARY KEY (`PMRpurchaseOrder_id_FIELD`);

--
-- Indexes for table `pmrs_table`
--
ALTER TABLE `pmrs_table`
  ADD PRIMARY KEY (`PMR_id_FIELD`);

--
-- Indexes for table `ppmpitems_table`
--
ALTER TABLE `ppmpitems_table`
  ADD PRIMARY KEY (`PPMPItem_id_FIELD`);

--
-- Indexes for table `ppmpitem_mod`
--
ALTER TABLE `ppmpitem_mod`
  ADD PRIMARY KEY (`ppmpitem_mod_id`);

--
-- Indexes for table `ppmps_mod_request`
--
ALTER TABLE `ppmps_mod_request`
  ADD PRIMARY KEY (`PPMP_id_mod`);

--
-- Indexes for table `ppmps_table`
--
ALTER TABLE `ppmps_table`
  ADD PRIMARY KEY (`PPMP_id_FIELD`);

--
-- Indexes for table `seen_announcement`
--
ALTER TABLE `seen_announcement`
  ADD PRIMARY KEY (`seen_id`),
  ADD UNIQUE KEY `unique_user_notif` (`unique_user_notif`);

--
-- Indexes for table `users_table`
--
ALTER TABLE `users_table`
  ADD PRIMARY KEY (`User_id_FIELD`);

--
-- Indexes for table `vouchers_table`
--
ALTER TABLE `vouchers_table`
  ADD PRIMARY KEY (`Voucher_id_FIELD`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `announcement`
--
ALTER TABLE `announcement`
  MODIFY `announcement_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `items_table`
--
ALTER TABLE `items_table`
  MODIFY `Item_id_FIELD` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `notification_table`
--
ALTER TABLE `notification_table`
  MODIFY `notification_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=200;

--
-- AUTO_INCREMENT for table `pmrpurchaseorders_table`
--
ALTER TABLE `pmrpurchaseorders_table`
  MODIFY `PMRpurchaseOrder_id_FIELD` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `pmrs_table`
--
ALTER TABLE `pmrs_table`
  MODIFY `PMR_id_FIELD` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `ppmpitems_table`
--
ALTER TABLE `ppmpitems_table`
  MODIFY `PPMPItem_id_FIELD` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1184;

--
-- AUTO_INCREMENT for table `ppmpitem_mod`
--
ALTER TABLE `ppmpitem_mod`
  MODIFY `ppmpitem_mod_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;

--
-- AUTO_INCREMENT for table `ppmps_mod_request`
--
ALTER TABLE `ppmps_mod_request`
  MODIFY `PPMP_id_mod` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- AUTO_INCREMENT for table `ppmps_table`
--
ALTER TABLE `ppmps_table`
  MODIFY `PPMP_id_FIELD` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=216;

--
-- AUTO_INCREMENT for table `seen_announcement`
--
ALTER TABLE `seen_announcement`
  MODIFY `seen_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users_table`
--
ALTER TABLE `users_table`
  MODIFY `User_id_FIELD` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `vouchers_table`
--
ALTER TABLE `vouchers_table`
  MODIFY `Voucher_id_FIELD` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
