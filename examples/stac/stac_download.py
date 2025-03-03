"""
Author: Système d'Information du Territoire Neuchâtelois (SITN), sitn@ne.ch
Description: Downloads all assets from a STAC catalog
Last revision: March 3, 2025
Licence: BSD 3-Clause License
"""

import os
import requests
import pystac

def download_catalog_assets(catalog_url, output_folder):
    """
    Downloads all asset files referenced in a STAC catalog.

    Parameters:
    - catalog_url (str): URL to the STAC catalog JSON.
    - output_folder (str): Local folder to save the downloaded assets.
    """
    # Ensure output folder exists
    os.makedirs(output_folder, exist_ok=True)
    
    # Fetch the catalog JSON from the URL
    response = requests.get(catalog_url)
    response.raise_for_status()
    catalog_json = response.json()
    
    # Parse the catalog using pystac
    catalog = pystac.read_dict(catalog_json)
    
    # Iterate over all items in the catalog
    for item in catalog.get_all_items():
        # Iterate over each asset in the item
        for asset_key, asset in item.assets.items():
            file_url = asset.href
            local_filename = os.path.basename(file_url)
            output_path = os.path.join(output_folder, local_filename)
            print(f"Downloading {local_filename} from {file_url} to {output_path}...")
            
            # Download the file in chunks
            file_response = requests.get(file_url, stream=True)
            file_response.raise_for_status()
            with open(output_path, 'wb') as f:
                for chunk in file_response.iter_content(chunk_size=8192):
                    if chunk:  # Filter out keep-alive chunks
                        f.write(chunk)
    
    print("Download completed.")

# Example use
if __name__ == "__main__":
    catalog_url = "https://sitn.ne.ch/services/stac/ne/lidar2022/pointcloud/catalog.json"
    output_folder = "C:/Users/johndoe/Downloads/downloaded_stac_assets/"
    download_catalog_assets(catalog_url, output_folder)